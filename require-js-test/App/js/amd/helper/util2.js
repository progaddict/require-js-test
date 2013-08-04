define(['jquery'], function ($) {
    var exportedApi = {};

    exportedApi.doSomething = function () {
        $(function () {
            $('body').append('<div>UTIL 2</div>');
        });
    };
    
    return exportedApi;
});