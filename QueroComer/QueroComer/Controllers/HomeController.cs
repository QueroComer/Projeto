using QueroComer.utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QueroComer.Controllers
{
    public class HomeController : Controller
    {

        private ActionResult ValidaCadastro(FormCollection cadastro)
        {
            DateTime data;

            dataConnection conexao = new dataConnection();

            if (string.IsNullOrEmpty(cadastro["Login"]))
            {
                ViewBag.Mensagem = "Preencha o campo de login!";
            }
            else if (string.IsNullOrEmpty(cadastro["Senha"]))
            {
                ViewBag.Mensagem = "Preecha o campo de senha!";
            }
            else if (string.IsNullOrEmpty(cadastro["Confirmacao"]))
            {
                ViewBag.Mensagem = "Preecha o campo de confirmação de senha!";
            }
            else if (string.IsNullOrEmpty(cadastro["Nome"]))
            {
                ViewBag.Mensagem = "Preecha o campo de nome!";
            }
            else if (string.IsNullOrEmpty(cadastro["DataNascimento"]))
            {
                ViewBag.Mensagem = "Preencha o campo de Data Nascimento!";
            }
            else if (!((cadastro["Senha"]).Equals(cadastro["Confirmacao"])))
            {
                ViewBag.Mensagem = "A confirmação de senha deve ser igual a senha!";
            }
            else if (string.IsNullOrEmpty(cadastro["Cep"]))
            {
                ViewBag.Mensagem = "Preecha o campo de Cep!";
            }
            else if (string.IsNullOrEmpty(cadastro["Endereco"]))
            {
                ViewBag.Mensagem = "Preecha o campo de Endereço!";
            }
            else if (string.IsNullOrEmpty(cadastro["Cidade"]))
            {
                ViewBag.Mensagem = "Preecha o campo de Cidade!";
            }
            else if (string.IsNullOrEmpty(cadastro["Estado"]))
            {
                ViewBag.Mensagem = "Preecha o campo de Estado!";
            }

            if (!DateTime.TryParse((cadastro["DataNascimento"]), out data))
            {
                ViewBag.Mensagem = "Digite uma data válida!";
            }

            if (String.IsNullOrEmpty(ViewBag.Messagem))
            {
                try
                {
                    conexao.Insert("usuarios", new string[] { "nom_usuario", "dt_nascimento", "email", "senha" }, new string[] { cadastro["Nome"], data.Year + "-" + data.Month + "-" + data.Day, cadastro["Login"], cadastro["Senha"] });
                    FormCollection frm = new FormCollection();
                    frm.Add("txt_usuario", cadastro["Login"]);
                    frm.Add("txt_senha", cadastro["Senha"]);
                    return this.Autenticar(frm);
                }
                catch
                {
                    ViewBag.Mensagem = "Erro ao inserir usuário!";
                }
            }

            return View("Cadastro", cadastro);
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
            return this.ValidaCadastro(formulario);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public JsonResult Login(FormCollection formulario)
        {
            return this.Autenticar(formulario);
        }

        private JsonResult Autenticar(FormCollection formulario)
        {
            if (!string.IsNullOrEmpty(formulario["txt_usuario"]) && !string.IsNullOrEmpty(formulario["txt_senha"]))
            {
                dataConnection conexao = new dataConnection();

                if (conexao.Select("usuarios", null, new string[] { "*" }, new string[] { string.Format("email = '{0}'", formulario["txt_usuario"]), string.Format("senha = '{0}'", formulario["txt_senha"]) }).Any())
                {
                    Session["logged"] = true;
                    return Json(new { status = true });
                }
            }
            Session["logged"] = false;
            ViewBag.Message = "Preencha o login e a senha!";
            return Json(new { status = false });
        }
    }
}
