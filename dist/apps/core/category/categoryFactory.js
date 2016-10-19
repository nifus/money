(function (angular, window) {

    'use strict';

    angular.module('core')
        .factory('categoryFactory', categoryFactory);
    categoryFactory.$inject = ['$http', 'cacheService','categoryService'];

    function categoryFactory($http, cacheService, categoryService) {

        return {
            getAll: getAll,
            store: store
        };


        function getAll() {
            var cache = cacheService(
                function () {
                    $http.get('/api/category/get-all').success(function (answer) {
                        var cats = [];
                        var i;
                        for (i in answer) {
                            cats.push(categoryService(answer[i]));
                        }
                        cache.end(cats);
                    }).error(function (data, code) {
                        cache.end({success: false, error: data.error});
                    })
                }, 'cats_getAll', 10
            );
            return cache.promise;
        }


        function store(data) {
            return $http.post(  '/api/category', data).then(function (response) {
                return response.data;
            })
        }
    }


})(angular, window);



