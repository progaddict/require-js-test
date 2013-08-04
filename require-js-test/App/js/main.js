require.config({
    paths: {
        'jquery': 'lib/jquery'
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