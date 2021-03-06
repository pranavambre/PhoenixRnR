﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PhoenixRnR.DAL;
using PhoenixRnR.Models;

namespace PhoenixRnR.Controllers
{
    public class HomeController : Controller
    {
        private ChecklistContext db = new ChecklistContext();
        

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

        public ActionResult Prepare()
        {
            ViewBag.Message = "Your page.";

            return View();
        }

        public ActionResult NearbyHospitals()
        {
            ViewBag.Message = "Your page.";

            return View();
        }


        [HttpGet]
        public ActionResult FinalChecklist()
        {

            ParentClass pc = new ParentClass();
            pc.Homes1 = db.Homes.ToList<Home>();
            pc.Gardens = db.Gardens.ToList<Garden>();

            
            //ViewBag.Message = "Your page.";

            //HouseModel hm = new HouseModel();
            //using (ChecklistContext db = new ChecklistContext())
            //{
            //    hm.Homes1 = db.Homes.ToList<Home>();
            //}

             return View(pc);
        }


    }
}