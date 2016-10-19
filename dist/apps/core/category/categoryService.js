(function (angular, window) {
    'use strict';
    angular.module('core').service('categoryService', categoryService);
    categoryService.$inject = ['$http'];

    function categoryService($http) {
        return function (data) {
            var Object = data;
            Object.waiting = false;
            Object.total = 0;
            for(var i in Object.transactions){
                Object.total+=Object.transactions[i].price;
            }





            return Object;
        }
    }
})(angular, window);

