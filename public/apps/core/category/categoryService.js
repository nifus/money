(function (angular, window) {
    'use strict';
    angular.module('core').service('categoryService', categoryService);
    categoryService.$inject = ['$http'];

    function categoryService($http) {
        return function (data) {
            var Object = data;
            Object.waiting = false;





            return Object;
        }
    }
})(angular, window);

