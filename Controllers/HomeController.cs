using PhoenixRnR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace PhoenixRnR.Controllers
{
    public class HomeController : Controller
    {

        private FireBreak_dbEntities2 db = new FireBreak_dbEntities2();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Map()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult KnowAboutBushfire()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult Timeline()
        {
            ViewBag.Message = "";

            return View();
        }


        public ActionResult NearbyVetClinic()
        {
            ViewBag.Message = "";

            return View(db.pranavs.ToList());
        }




        public ActionResult Prepare()
        {
            ViewBag.Message = "Your page.";

            return View();
        }

        public ActionResult SeverityMap()
        {
            ViewBag.Message = "Your page.";

            return View();
        }

        public ActionResult FinalChecklist()
        {
            ViewBag.Message = "Your page.";

            return View();
        }

        public ActionResult NearbyHospitals()
        {
            ViewBag.Message = "Your page.";

            return View();
        }

        public ActionResult Quiz()
        {
            return View();
        }

        public ActionResult GetYourChecklist()
        {
           
            return View();
        }

        public ActionResult Game()
        {

            return View();
        }






        //[HttpPost]
        //public ActionResult FinalChecklist()
        //{

        //    ParentClass pc = new ParentClass();
        //    pc.Homes1 = db.Homes.ToList<Home>();
        //    pc.Gardens = db.Gardens.ToList<Garden>();


        //    //ViewBag.Message = "Your page.";

        //    //HouseModel hm = new HouseModel();
        //    //using (ChecklistContext db = new ChecklistContext())
        //    //{
        //    //    hm.Homes1 = db.Homes.ToList<Home>();
        //    //}

        //     return View(pc);
        //}




    }
}