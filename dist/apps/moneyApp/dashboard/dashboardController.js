(function () {
    'use strict';
    angular.module('moneyApp').controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$filter'];

    function dashboardController($scope, $filter) {

        $scope.form = {
            type: 'noncash'
        };
        $scope.env = {
            categories: [],
            transactions: [],
            total: 0
        };
        var horizon = Horizon();
        horizon.connect();

        var categories = horizon("category");

         categories.watch().subscribe(function (categories) {
            $scope.env.categories = categories;
            $scope.$apply();
        });


        var transactions = horizon("transaction");
        transactions.watch().subscribe(function (values) {
            $scope.env.transactions = values;
            for (var i in $scope.env.categories) {
                $scope.env.categories[i].transactions = [];
                $scope.env.categories[i].total = 0;
                for (var j in $scope.env.transactions) {
                    var isFound = $scope.env.transactions[j].categories.indexOf($scope.env.categories[i].id);
                    isFound != -1 ? $scope.env.categories[i].transactions.push($scope.env.transactions[j]) : ''
                    isFound != -1 ? $scope.env.categories[i].total += $scope.env.transactions[j].price  : ''
                }
            }
            updateTotal();
            $scope.$apply();
        })


        $scope.tagTransform = function (newTag) {
            return {
                id: undefined,
                title: newTag
            };
        };


        $scope.save = function (data) {
            var new_cats = [];
            var cat_ids = [];
            for (var i in data.categories) {
                if (!data.categories[i].id) {

                    new_cats.push({title: data.categories[i].title})
                } else {
                    cat_ids.push(data.categories[i].id)
                }
            }
            if (new_cats.length > 0) {
                horizon.aggregate({
                    categories: categories.insert(new_cats),
                }).watch().subscribe(function (result) {
                    cat_ids.push(result.categories.id);
                    if (cat_ids.length == data.categories.length) {
                        data.categories = cat_ids;
                        transactions.insert(data)
                    }
                })
            } else {
                data.categories = cat_ids;
                transactions.insert(data)
            }
        }

        function updateTotal() {
            $scope.env.total = 0;
            for (var i in $scope.env.categories) {
                for (var j in $scope.env.categories[i].transactions) {
                    $scope.env.total += $scope.env.categories[i].transactions[j].price
                }

            }
        }


    }
})();

