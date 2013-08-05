define(['domReady!'], function ($) {
    var exportedApi = {};

    exportedApi.doSomething = function () {
        alert('did something');
    };
    
    return exportedApi;
});