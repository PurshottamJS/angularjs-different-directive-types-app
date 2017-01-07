;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('elementDirective', elementDirective);
    elementDirective.$inject = [];

    function elementDirective() {
        return {
            restrict : "E",
            replace : true,
            template : "<p>This text comes from a element directive</p>"
        }
    }
}(window, angular, undefined));
