using Restaurant.BusinessLogic;
using Restaurant.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Restaurant.Controllers
{
    public class ReservationController : Controller
    {
        private IReservationHelper _reservationHelper;

        public ReservationController(IReservationHelper reservationHelper)
        {
            _reservationHelper = reservationHelper;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetReservations()
        {
            List<ReservationViewModel> x = _reservationHelper.GetReservarion();

            return Json(x, JsonRequestBehavior.AllowGet);
        }

        //public ActionResult Details(int id)
        //{
        //    ReservationViewModel reservation = _reservationHelper.GetReservationDetails(id);

        //    if (reservation == null)
        //        return HttpNotFound();

        //    return View(reservation);
        //}

        public ActionResult Details(int id)
        {
            ReservationViewModel reservation = _reservationHelper.GetReservationDetails(id);

            return Json(reservation, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ReservationViewModel newItem)
        {
            if (ModelState.IsValid)
            {
                _reservationHelper.CreateReservation(newItem);

                return RedirectToAction("Index");
            }

            return View(newItem);
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            ReservationViewModel reservation = _reservationHelper.GetReservationDetails(id);

            return Json(reservation, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Update(int newItem)
        {
            //if (ModelState.IsValid)
            //{
            //    //_reservationHelper.UpdateReservation(newItem);

            //    return RedirectToAction("Index");
            //}

            return View(newItem);
        }

        public ActionResult Delete(int id)
        {
            ReservationViewModel reservation = _reservationHelper.GetReservationDetails(id);

            return Json(reservation, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _reservationHelper.DeleteReservation(id);

            return RedirectToAction("Index");
        }
    }
}
