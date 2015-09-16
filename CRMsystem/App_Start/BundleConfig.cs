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
                        "~/Content/Scripts/bootstrap.js"
                        ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/fonts/font-awesome-4.4.0/css/font-awesome.min.css"
                      ));


            //для страницы index.cshtml
            bundles.Add(new StyleBundle("~/Content/indexStyles").Include(
                "~/Content/style/start.css",
                 "~/Content/style/authorize.css"
                ));

            //для страницы start.shtml
            bundles.Add(new StyleBundle("~/Content/startStyles").Include(
               "~/Content/style/main.css",
               "~/Content/style/events.css",
               "~/Content/owl.carousel.css"

               ));
            bundles.Add(new ScriptBundle("~/Content/startScripts").Include(
                "~/Content/react/navbar_compiled.js",
                "~/Content/react/day_compiled.js",
                "~/Content/react/event_compiled.js",
                "~/Content/react/deal_compiled.js",
                "~/Content/Scripts/owl.carousel.min.js",
                "~/Content/js/myScript.js"
                ));

            //для страницы deals.cshtml
            bundles.Add(new StyleBundle("~/Content/dealsStyles").Include(
                         "~/Content/style/main.css",
                         "~/Content/jquery-ui.min.css",
                         "~/Content/owl.carousel.css"

                         ));
            bundles.Add(new ScriptBundle("~/Content/dealsScripts").Include(
                "~/Content/react/navbar_compiled.js",
                "~/Content/react/deal_compiled.js",
                "~/Content/Scripts/owl.carousel.min.js",
                "~/Content/js/myScript.js",
                "~/Content/Scripts/jquery-ui.min.js"
                ));

            //для страницы contacts.cshtml
            bundles.Add(new StyleBundle("~/Content/contactsStyles").Include(
                       "~/Content/style/main.css",
                        "~/Content/style/contacts.css",
                       "~/Content/jquery-ui.min.css"
                       ));
            bundles.Add(new ScriptBundle("~/Content/contactsScripts").Include(
                "~/Content/react/navbar_compiled.js",
                "~/Content/react/deal_compiled.js",
                 "~/Content/react/contacts_compiled.js",
                "~/Content/js/myScript.js",
                "~/Content/Scripts/jquery-ui.min.js"
                ));
            //для страницы companies.cshtml
            bundles.Add(new StyleBundle("~/Content/companiesStyles").Include(
                       "~/Content/style/main.css",
                        "~/Content/style/contacts.css",
                       "~/Content/jquery-ui.min.css",
                       "~/Content/owl.carousel.css"

                       ));
            bundles.Add(new ScriptBundle("~/Content/companiesScripts").Include(
                "~/Content/react/navbar_compiled.js",
                "~/Content/react/deal_compiled.js",
                 "~/Content/react/companies_compiled.js",
                "~/Content/Scripts/owl.carousel.min.js",
                "~/Content/js/myScript.js",
                "~/Content/Scripts/jquery-ui.min.js"
                ));

            //для страницы Chooseuser.cshtml
            bundles.Add(new StyleBundle("~/Content/chooseuserStyles").Include(
                       "~/Content/style/chooseuser.css",
                       "~/Content/owl.carousel.css"

                       ));
            bundles.Add(new ScriptBundle("~/Content/chooseuserScripts").Include(
                "~/Content/react/users_compiled.js",
                "~/Content/Scripts/owl.carousel.min.js",
                "~/Content/js/jsProfile.js"
                ));
        }
    }
}
