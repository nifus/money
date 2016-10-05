(function () {
    'use strict';
    angular.module('moneyApp').controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope',  'transferFactory','categoryFactory'];

    function dashboardController($scope, transferFactory, categoryFactory) {

        $scope.form = {
            type:'noncash'
        };
        $scope.env = {
            categories:[]
        };
        function initPage(deferred) {
            $scope.env.categories = $scope.$parent.env.categories;
            return deferred.promise;
        }

        $scope.tagTransform = function (newTag) {
            return {
                id: undefined,
                title: newTag
            };
        };

        // initPage();
        $scope.$parent.init.push(initPage);

        $scope.save = function(data){
            transferFactory.store(data).then(function(response){
                if(response.success==true){
                    $scope.form = {
                        type:'noncash'
                    };
                    categoryFactory.getAll().then(function(categories){
                        $scope.env.categories = categories;
                    })
                }
            })
        }


    }
})();

