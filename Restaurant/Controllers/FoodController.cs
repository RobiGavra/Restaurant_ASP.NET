using Restaurant.Models;
using Restaurant.Properties;
using System;
using System.IO;
using System.Web;
using System.Web.Mvc;
using Restaurant.BusinessLogic;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Restaurant.Controllers
{
    public class FoodController : Controller
    {
        private IFoodHelper _foodHelper;

        public FoodController(IFoodHelper foodHelper)
        {
            _foodHelper = foodHelper;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetFoods()
        {
            List<FoodViewModel> menu = _foodHelper.GetFoods();

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();

            List<string> data = new List<string>();

            foreach (FoodViewModel item in menu)
            {
                data.Add(JsonConvert.SerializeObject(item, camelCaseFormatter));
            }

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Details(int id)
        {
            FoodViewModel food = _foodHelper.GetFoodDetails(id);

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            string data = JsonConvert.SerializeObject(food, camelCaseFormatter);

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult Create(FoodViewModel newItem)
        {
            if (ModelState.IsValid)
            {
                _foodHelper.CreateFood(newItem);
            }

            return Json(JsonRequestBehavior.AllowGet);
        }

        public ActionResult Edit(int id)
        {
            FoodViewModel food = _foodHelper.GetFoodDetails(id);

            return Json(food, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult Edit(FoodViewModel newItem)
        {
            _foodHelper.UpdateFood(newItem);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Delete(int id)
        {
            FoodViewModel food = _foodHelper.GetFoodDetails(id);

            return Json(food, JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public ActionResult DeleteFood(int id)
        {
            _foodHelper.DeleteFood(id);
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}