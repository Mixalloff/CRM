using System.Web;
using System.Web.Optimization;

namespace CRMsystem
{
    public class BundleConfig
    {
        //Дополнительные сведения об объединении см. по адресу: http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/owljs").Include(
                        "~/Scripts/owl.carousel.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-ui").Include(
                        "~/Scripts/jquery-ui.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/myscripts").Include(
                      "~/js/*.js"));


            // Используйте версию Modernizr для разработчиков, чтобы учиться работать. Когда вы будете готовы перейти к работе,
            // используйте средство сборки на сайте http://modernizr.com, чтобы выбрать только нужные тесты.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/font-awesome.min.css"));

            bundles.Add(new StyleBundle("~/Content/jquery-ui").Include(
                    "~/Content/jquery-ui.min.css"));

            bundles.Add(new StyleBundle("~/Content/owlcss").Include(
                   "~/Content/owl.carousel.css"));

            bundles.Add(new ScriptBundle("~/bundles/react").Include(
                      "~/react/*.js"));

            bundles.Add(new StyleBundle("~/Content/style/css").Include(
            "~/Content/style/*.css"));

        }
    }
}
