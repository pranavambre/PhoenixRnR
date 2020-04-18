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
        public ActionResult IndexViewData()
        {
            ViewBag.Message = "Welcome to my demo!";
            ViewData["Home"] = db.Homes.ToList<Home>();
            ViewData["Garden"] = db.Gardens.ToList<Garden>();
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
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

        [HttpGet]
        public ActionResult FinalChecklist()
        {
            //ViewBag.Message = "Your page.";

            //HouseModel hm = new HouseModel();
            //using (ChecklistContext db = new ChecklistContext())
            //{
            //    hm.Homes1 = db.Homes.ToList<Home>();
            //}

             return View();
        }


    }
}