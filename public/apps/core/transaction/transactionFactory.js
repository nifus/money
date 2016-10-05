(function (angular) {

    'use strict';

    angular.module('core')
        .factory('transactionFactory', transactionFactory);
    transactionFactory.$inject = ['cacheService', '$http','transactionService'];

    function transactionFactory(cacheService, $http, transactionService) {

        return {
            getAll: getAll,
            store: store
        };


        function getAll() {
            var cache = cacheService(
                function () {
                    $http.get('/api/transaction/get-all').success(function (answer) {
                        var users = [];
                        var i;
                        for (i in answer) {
                            users.push(transactionService(answer[i]));
                        }
                        cache.end(users);
                    }).error(function (data, code) {
                        cache.end({success: false, error: data.error});
                    })
                }, 'user_getAllUsers', 10
            );
            return cache.promise;
        }


        function store(data) {
            return $http.post('/api/transaction', data).then(function (response) {
                return response.data;
            })
        }
    }


})(angular);



