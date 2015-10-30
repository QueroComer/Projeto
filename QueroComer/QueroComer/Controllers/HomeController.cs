using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QueroComer.Controllers
{
    public class HomeController : Controller
    {
        [HttpPost]
        public ActionResult ValidaCadastro(FormCollection cadastro)
        {
            DateTime data;

            if(string.IsNullOrEmpty(cadastro["Login"])) {
                ViewBag.Mensagem = "Preencha o campo de login!";
            }else if(string.IsNullOrEmpty(cadastro["Senha"])) {
                 ViewBag.Mensagem = "Preecha o campo de senha!";
            }else if(string.IsNullOrEmpty(cadastro["Confirmacao"])) {
                  ViewBag.Mensagem = "Preecha o campo de confirmação de senha!";
            }else if(string.IsNullOrEmpty(cadastro["Nome"])) {
                  ViewBag.Mensagem = "Preecha o campo de nome!";
            }else if(string.IsNullOrEmpty(cadastro["DataNascimento"])) {
                  ViewBag.Mensagem = "Preencha o campo de Data Nascimento!";
            }else if(!((cadastro["Senha"]).Equals(cadastro["Confirmacao"]))) {
                  ViewBag.Mensagem = "A confirmação de senha deve ser igual a senha!";
            }else if (string.IsNullOrEmpty(cadastro["Cep"])) {
                ViewBag.Mensagem = "Preecha o campo de Cep!";
            }else if (string.IsNullOrEmpty(cadastro["Endereco"])){
                ViewBag.Mensagem = "Preecha o campo de Endereço!";
            }else if (string.IsNullOrEmpty(cadastro["Cidade"])){
                ViewBag.Mensagem = "Preecha o campo de Cidade!";
            }else if (string.IsNullOrEmpty(cadastro["Estado"])){
                ViewBag.Mensagem = "Preecha o campo de Estado!";
            }

            if(!DateTime.TryParse((cadastro["DataNascimento"]), out data)){
                ViewBag.Mensagem = "Digite uma data válida!";
            }
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        [HttpGet]
        public ActionResult Cadastro()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Cadastro(FormCollection formulario)
        {

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Autenticar(FormCollection formulario)
        {
            if (string.IsNullOrEmpty(formulario["txt_usuario"]) && string.IsNullOrEmpty(formulario["txt_senha"]))
                return RedirectToAction("Index");

            return RedirectToAction("Index","Logged");
        }
    }
}
