(function (angular) {

    'use strict';

    angular.module('core')
        .factory('transferFactory', transferFactory);
    transferFactory.$inject = ['cacheService', '$http'];

    function transferFactory(cacheService, $http) {

        return {
            getAll: getAll,
            store: store
        };


        function getAll() {
            var cache = cacheService(
                function () {
                    $http.get('/api/transfer/get-all').success(function (answer) {
                        var users = [];
                        var i;
                        for (i in answer) {
                            users.push(userService(answer[i]));
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



