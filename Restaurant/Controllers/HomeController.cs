﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Restaurant.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UploadImage()
        {
            return View();
        }       
    }
}