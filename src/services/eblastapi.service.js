'use strict';

angular.module('eBlastApp')

.factory('eBlastAPI', ['$q', '$http', 'eBlastURL', function($q, $http, eBlastURL) {
    return new function() {

        this.search = function() {
            var deferred = $q.defer();

            $http.jsonp(flickrURL).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject([data,status,headers,config]);
                });

            return deferred.promise;
        }

    };
}]);