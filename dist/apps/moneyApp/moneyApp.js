(function (angular, window) {
    'use strict';
    angular.module('moneyApp', ['ui.router', 'ui.select', 'ngSanitize']).config(function ($stateProvider, $urlRouterProvider) {

        // $auth
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('dashboard', {
            url: '/',
            templateUrl: 'apps/moneyApp/dashboard/dashboard.html',
            controller: 'dashboardController'
        })


    }).filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }]).filter('propsFilter', function() {
        return function(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    }).filter('getById', function () {
        return function(inputs,id) {
            angular.forEach(inputs, function (input) {
                if (input.id == id) {
                    return input;
                }
            })
        };
    });

})(angular, window);

