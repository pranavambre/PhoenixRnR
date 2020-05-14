using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PhoenixRnR.Models;

namespace PhoenixRnR.Controllers
{
    public class pranavsController : Controller
    {
        private FireBreak_dbEntities2 db = new FireBreak_dbEntities2();

        // GET: pranavs
        public ActionResult Index()
        {
            return View(db.pranavs.ToList());
        }

        // GET: pranavs/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            pranav pranav = db.pranavs.Find(id);
            if (pranav == null)
            {
                return HttpNotFound();
            }
            return View(pranav);
        }

        // GET: pranavs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: pranavs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,Clinic_Name,Address,PostCode")] pranav pranav)
        {
            if (ModelState.IsValid)
            {
                db.pranavs.Add(pranav);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(pranav);
        }

        // GET: pranavs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            pranav pranav = db.pranavs.Find(id);
            if (pranav == null)
            {
                return HttpNotFound();
            }
            return View(pranav);
        }

        // POST: pranavs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,Clinic_Name,Address,PostCode")] pranav pranav)
        {
            if (ModelState.IsValid)
            {
                db.Entry(pranav).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(pranav);
        }

        // GET: pranavs/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            pranav pranav = db.pranavs.Find(id);
            if (pranav == null)
            {
                return HttpNotFound();
            }
            return View(pranav);
        }

        // POST: pranavs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            pranav pranav = db.pranavs.Find(id);
            db.pranavs.Remove(pranav);
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
