;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app', ['app.common'])
}(window, angular, undefined));
;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.common', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
}(window, angular, undefined));

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
