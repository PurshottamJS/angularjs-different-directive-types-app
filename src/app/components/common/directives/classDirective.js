;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('classDirective', classDirective);
    classDirective.$inject = [];

    function classDirective() {
        return {
            restrict : "C",
            replace : true,
            template : "<p>This text comes from a class directive</p>"
        }
    }
}(window, angular, undefined));
