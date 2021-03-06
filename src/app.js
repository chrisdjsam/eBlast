'use strict';

angular.module('eBlastApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])

    .value('eBlastURL', 'http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'views/home/home.html'
            })
            .when('/flickr/list', {
                controller:'eBlastListCtrl',
                templateUrl:'views/flickr/list.html'
            })
            .when('/flickr/view/:index', {
                controller:'FlickrViewCtrl',
                templateUrl:'views/flickr/view.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    }])

    .filter('tidyAuthor', function() {
        return function(input) {
            return input.match(/\((.+?)\)/)[1];
        };
    })

    .filter('htmlToPlaintext', function() {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    });