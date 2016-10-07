(function () {
    'use strict';
    angular.module('moneyApp').controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope',  'transactionFactory','categoryFactory'];

    function dashboardController($scope, transactionFactory, categoryFactory) {

        $scope.form = {
            type:'noncash'
        };
        $scope.env = {
            categories:[],
            transactions:[],
            total: 0
        };
        function initPage(deferred) {
            $scope.env.categories = $scope.$parent.env.categories;
            updateTotal();

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
            transactionFactory.store(data).then(function(response){
                if(response.success==true){
                    $scope.form = {
                        type:'noncash'
                    };
                    categoryFactory.getAll().then(function(categories){
                        $scope.env.categories = categories;
                        updateTotal();
                    });

                }
            })
        }

        function updateTotal() {
            $scope.env.total = 0;
            for( var i in $scope.env.categories){
                for( var j in $scope.env.categories[i].transactions){
                    $scope.env.total+=$scope.env.categories[i].transactions[j].price
                }

            }
        }


    }
})();

