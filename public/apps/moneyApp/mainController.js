(function () {
    'use strict';
    angular.module('moneyApp').controller('mainController', mainController);

    mainController.$inject = ['$scope', '$q','categoryFactory'];

    function mainController($scope, $q, categoryFactory) {
        $scope.env = {
            loading: true,
            config: [],
            user: null,
            currency: []
        };


        $scope.promises = [];
        $scope.initPromises = [];
        $scope.user = null;
        $scope.loaded = false;
        $scope.init = [];
        $scope.counter = 0;


        var categoryPromise = categoryFactory.getAll().then( function(categories){
            $scope.env.categories = categories;
        });
        $scope.promises.push(categoryPromise);



        $q.all($scope.promises).then(function () {
            // console.log('mainController loaded');
            $scope.loaded = true;
            execute();
        });


        $scope.$watchCollection('init', function (value) {
            if ($scope.loaded == true) {
                execute();
            }
        }, true);


        function execute() {

            for (var i in $scope.init) {
                var deferred = $q.defer();
                var promise = $scope.init[i](deferred, $scope.env);
                $scope.init.splice(i, 1);
                $scope.initPromises.push(promise);
            }
        }

        $scope.$watchCollection('initPromises', function (value) {
            if (value != undefined && value.length > 0) {
                $scope.loading = true;

                $scope.defer = $q.all($scope.initPromises).then(function () {
                    console.log('page loaded');
                    $scope.loading = false;
                    $scope.initPromises = [];
                });
            }

        });


    }
})();

