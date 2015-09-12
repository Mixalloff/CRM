using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CRMsystem.Startup))]
namespace CRMsystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
