using System.Web;
using System.Web.Optimization;

namespace Restaurant
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.validate*",
                        "~/Scripts/jquery-ui-{version}.js",
                        "~/Scripts/modernizr-*",
                        "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/Content/reservation").Include(
                   "~/Scripts/reservation/reservation.js"));

            bundles.Add(new ScriptBundle("~/angular/scripts")
              .Include(
                "~/bundles/AngularOutput/inline.*",
                "~/bundles/AngularOutput/polyfills.*",
                "~/bundles/AngularOutput/scripts.*",
                "~/bundles/AngularOutput/vendor.*",
                "~/bundles/AngularOutput/runtime.*",
                "~/bundles/AngularOutput/main.*"));

            bundles.Add(new StyleBundle("~/angular/styles")
              .Include("~/bundles/AngularOutput/styles.*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/jquery-ui.css",
                      "~/Content/bootstrap.css",
                      "~/Content/Site.css"));
        }
    }
}
