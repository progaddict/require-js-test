using System.Web.Optimization;

namespace require_js_test
{
  public static class BundleConfig
  {
    public static void RegisterBundles(BundleCollection bundles)
    {
      //AddDefaultIgnorePatterns(bundles.IgnoreList);
      //bundles.Add(new ScriptBundle("js/require")
      //  .Include("~/App/js/require-{version}.min.js"));
    }

    private static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
    {
      ignoreList.Clear();
      //ignoreList.Ignore("*.intellisense.js");
      //ignoreList.Ignore("*-vsdoc.js");
      //ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
      //ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
      //ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
    }

  }
}
