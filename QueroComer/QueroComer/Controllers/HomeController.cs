using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QueroComer.Controllers
{
    public class HomeController : Controller
    {
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
