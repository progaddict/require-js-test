using require_js_test.Controllers.Base;
using System.Web.Mvc;

namespace require_js_test.Controllers
{
    public class HomeController : BaseController
    {
      public ViewResult Index()
      {
        return View();
      }
    }
}
