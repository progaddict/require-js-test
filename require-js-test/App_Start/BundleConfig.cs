using System.Web.Optimization;

namespace require_js_test
{
  public static class BundleConfig
  {
    public static void RegisterBundles(BundleCollection bundles)
    {
      bundles.Add(new ScriptBundle("~/bundles/jquery")
        .Include("~/Scripts/jquery-{version}.js"));
    }
  }
}
