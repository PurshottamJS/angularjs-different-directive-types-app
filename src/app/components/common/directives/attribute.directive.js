;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('attributeDirective', attributeDirective);
    attributeDirective.$inject = [];

    function attributeDirective() {
        return {
            restrict : "A",
            template : "This text comes from a attribute directive"
        }
    }
}(window, angular, undefined));
