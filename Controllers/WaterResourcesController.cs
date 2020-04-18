using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PhoenixRnR.DAL;
using PhoenixRnR.Models;

namespace PhoenixRnR.Controllers
{
    public class WaterResourcesController : Controller
    {
        private ChecklistContext db = new ChecklistContext();

        // GET: WaterResources
        public ActionResult Index()
        {
            return View(db.WaterResourcess.ToList());
        }

        // GET: WaterResources/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            WaterResources waterResources = db.WaterResourcess.Find(id);
            if (waterResources == null)
            {
                return HttpNotFound();
            }
            return View(waterResources);
        }

        // GET: WaterResources/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: WaterResources/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Questions")] WaterResources waterResources)
        {
            if (ModelState.IsValid)
            {
                db.WaterResourcess.Add(waterResources);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(waterResources);
        }

        // GET: WaterResources/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            WaterResources waterResources = db.WaterResourcess.Find(id);
            if (waterResources == null)
            {
                return HttpNotFound();
            }
            return View(waterResources);
        }

        // POST: WaterResources/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Questions")] WaterResources waterResources)
        {
            if (ModelState.IsValid)
            {
                db.Entry(waterResources).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(waterResources);
        }

        // GET: WaterResources/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            WaterResources waterResources = db.WaterResourcess.Find(id);
            if (waterResources == null)
            {
                return HttpNotFound();
            }
            return View(waterResources);
        }

        // POST: WaterResources/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            WaterResources waterResources = db.WaterResourcess.Find(id);
            db.WaterResourcess.Remove(waterResources);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
