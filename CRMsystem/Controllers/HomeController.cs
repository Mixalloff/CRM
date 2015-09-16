using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRMsystem.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
   
        public ActionResult Chooseuser()
        {
            return View();
        }
        public ActionResult Companies()
        {
            return View();
        }
    }
}