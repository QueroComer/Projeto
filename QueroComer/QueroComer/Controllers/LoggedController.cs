using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QueroComer.Controllers
{
    public class LoggedController : Controller
    {
        //
        // GET: /Logged/

        public ActionResult Index()
        {
            if (Session["logged"] != null && (bool)Session["logged"])
            {
                return View();
            }
            ViewBag.Message = "Por favor, confira o login";
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public JsonResult LoginFacebook(string id, string name)
        {
            if(!String.IsNullOrEmpty(id)){
                Session["logged"] = true;
                Session["name"] = name;
                Session["id"] = id;
                return Json(new { status = true });
            }
            Session["logged"] = false;
            return Json(new { status = false });

        }      
    }
}
