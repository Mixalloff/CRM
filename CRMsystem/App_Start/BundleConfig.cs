using System.Web;
using System.Web.Optimization;

namespace CRMsystem
{
    public class BundleConfig
    {
        //Дополнительные сведения об объединении см. по адресу: http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/plugins").Include(
                        "~/Content/Scripts/jquery-{version}.js",
                        "~/Content/Scripts/owl.carousel.min.js",
                        "~/Content/Scripts/jquery.validate*",
                        "~/Content/js/*.js",
                        "~/Content/Scripts/jquery-ui.min.js",
                        "~/Content/Scripts/modernizr-*",
                        "~/Content/Scripts/bootstrap.js",
                        "~/Content/Scripts/respond.js",
                         "~/Content/react/*.js"
                        ));
      
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/fonts/font-awesome-4.4.0/css/font-awesome.min.css",
                      "~/Content/jquery-ui.min.css",
                       "~/Content/owl.carousel.css"
                      ));
        }
    }
}
