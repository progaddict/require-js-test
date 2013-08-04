define(['jquery'], function ($) {
    var exportedApi = {};

    exportedApi.doSomething = function () {
        $(function () {
            alert('did something');
        });
    };
    
    return exportedApi;
});