using Restaurant.Properties;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace Restaurant.Controllers
{
    public class ImageController : Controller
    {
        //public FileResult GetImage(string name, string type)
        //{
        //    string imagePath = Path.Combine(Settings.Default.ImageLocation, string.Format("{0}.{1}", name, type));
        //    using (Image image = Image.FromFile(imagePath))
        //    {
        //        using (MemoryStream m = new MemoryStream())
        //        {
        //            image.Save(m, image.RawFormat);
        //            byte[] imageBytes = m.ToArray();
        //            return File(imageBytes, "image/jpg");
        //        }
        //    }
        //}

        [HttpPost]
        public FileResult GetImage([System.Web.Http.FromBody]string name)
        {
            string imagePath = Path.Combine(Settings.Default.ImageLocation, string.Format("{0}", name));
            using (Image image = Image.FromFile(imagePath))
            {
                using (MemoryStream m = new MemoryStream())
                {
                    image.Save(m, image.RawFormat);
                    byte[] imageBytes = m.ToArray();
                    return File(imageBytes, "image/jpg");
                }
            }
        }

        [HttpPost]
        public ActionResult SaveImages(HttpPostedFileBase image1, HttpPostedFileBase image2, HttpPostedFileBase image3)
        {
            try
            {
                if (image1 != null && image1.ContentLength > 0)
                {
                    string pathImage = Path.Combine(Settings.Default.ImageLocation, "1.jpg");
                    EnsurePath(pathImage);
                    image1.SaveAs(pathImage);
                }

                if (image2 != null && image2.ContentLength > 0)
                {
                    string pathImage2 = Path.Combine(Settings.Default.ImageLocation, "2.jpg");
                    EnsurePath(pathImage2);
                    image2.SaveAs(pathImage2);
                }

                if (image3 != null && image3.ContentLength > 0)
                {
                    string pathImage3 = Path.Combine(Settings.Default.ImageLocation, "3.jpg");
                    EnsurePath(pathImage3);
                    image3.SaveAs(pathImage3);
                }
            }
            catch (Exception ex)
            {
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
            }

            return View("~/Views/Home/UploadImage.cshtml");
        }

        [HttpPost]
        public void SaveImage(HttpPostedFileBase image)
        {
            try
            {
                if (image != null && image.ContentLength > 0)
                {
                    string pathImage = Path.Combine(Settings.Default.ImageLocation, image.FileName);
                    EnsurePath(pathImage);
                    image.SaveAs(pathImage);
                }
            }
            catch (Exception ex)
            {
                ViewBag.Message = "ERROR:" + ex.Message.ToString();
            }
        }

        private void EnsurePath(string path)
        {
            FileInfo fi = new FileInfo(path);
            if (!fi.Directory.Exists)
                fi.Directory.Create();
            if (fi.Exists)
                fi.Delete();
        }
    }
}