(function (angular, window) {
    'use strict';
    angular.module('core').service('transactionService', transactionService);
    transactionService.$inject = ['$http'];

    function transactionService($http) {
        return function (data) {
            var Object = data;
            Object.waiting = false;





            return Object;
        }
    }
})(angular, window);

