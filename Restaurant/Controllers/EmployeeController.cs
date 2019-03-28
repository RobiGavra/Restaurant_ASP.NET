using System.Web.Mvc;
using Restaurant.Models;
using Restaurant.BusinessLogic;
using System.Runtime.CompilerServices;
using System.Collections.Generic;

namespace Restaurant.Controllers
{
    public class EmployeeController : Controller
    {
        private IEmployeeHelper _employeeHelper;

        public EmployeeController(IEmployeeHelper employeeHelper)
        {
            _employeeHelper = employeeHelper;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetEmployees()
        {
            List<EmployeeViewModel> x = _employeeHelper.GetEmployees();

            return Json(x, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Details(int id)
        {
            EmployeeViewModel employee = _employeeHelper.GetEmployeeDetails(id);

            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(EmployeeViewModel newItem)
        {
            if (ModelState.IsValid)
            {
                _employeeHelper.CreateEmployee(newItem);

                return RedirectToAction("Index");
            }

            return View(newItem);
        }

        public ActionResult Edit(int id)
        {
            EmployeeViewModel employee = _employeeHelper.GetEmployeeDetails(id);

            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(EmployeeViewModel newItem)
        {
            if (ModelState.IsValid)
            {
                _employeeHelper.UpdateEmployee(newItem);

                return RedirectToAction("Index");
            }

            return View(newItem);
        }

        public ActionResult Delete(int id)
        {
            EmployeeViewModel employee = _employeeHelper.GetEmployeeDetails(id);

            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _employeeHelper.DeleteEmployee(id);

            return RedirectToAction("Index");
        }
    }
}