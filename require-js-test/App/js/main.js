require.config({
    paths: {
        'jquery': 'lib/jquery',
        'knockout': 'lib/knockout',
        'domReady': 'amd/domReady'
    }
});

// clear global namespace from jQuery
require(['jquery'], function ($) {
    $.noConflict(true);
});

// test 1
require(['amd/helper/util'], function (util) {
    util.doSomething();
});

// test 2
require(['amd/helper/util2'], function (util) {
    util.doSomething();
});

// ko test
require(['knockout', 'amd/view-models/appViewModel', 'domReady!'], function (ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});