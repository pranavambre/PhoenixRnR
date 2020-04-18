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
    public class GardensController : Controller
    {
        private ChecklistContext db = new ChecklistContext();

        // GET: Gardens
        public ActionResult Index()
        {
            return View(db.Gardens.ToList());
        }

        // GET: Gardens/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Garden garden = db.Gardens.Find(id);
            if (garden == null)
            {
                return HttpNotFound();
            }
            return View(garden);
        }

        // GET: Gardens/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Gardens/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Questions")] Garden garden)
        {
            if (ModelState.IsValid)
            {
                db.Gardens.Add(garden);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(garden);
        }

        // GET: Gardens/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Garden garden = db.Gardens.Find(id);
            if (garden == null)
            {
                return HttpNotFound();
            }
            return View(garden);
        }

        // POST: Gardens/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Questions")] Garden garden)
        {
            if (ModelState.IsValid)
            {
                db.Entry(garden).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(garden);
        }

        // GET: Gardens/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Garden garden = db.Gardens.Find(id);
            if (garden == null)
            {
                return HttpNotFound();
            }
            return View(garden);
        }

        // POST: Gardens/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Garden garden = db.Gardens.Find(id);
            db.Gardens.Remove(garden);
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
