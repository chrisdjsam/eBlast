'use strict';

angular.module('eBlastApp')

    .controller('eBlastListCtrl', ['$scope', 'eblastAPI', function($scope, eblastAPI) {

        $scope.entries = [];

        $scope.refresh = function() {
            eblastAPI.search().then( function(data) {
                $scope.entries = data.items;
            });
        };

        $scope.refresh();

    }])

    .controller('eBlastViewCtrl', ['$scope', '$routeParams', 'eblastAPI', function($scope, $routeParams, eblastAPI) {

        $scope.refresh = function() {
            eblastAPI.search().then( function(data) {
                $scope.entry = data.items[$routeParams.index];
            });
        };

        $scope.refresh();

    }]);