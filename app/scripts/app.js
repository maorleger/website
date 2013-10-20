'use strict';

var app = angular.module('websiteApp', ['ui.bootstrap', 'websiteApp.directives', 'websiteApp.controllers', 'websiteApp.services'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: ''
      })
      .when('/About', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activetab: 'About'
      })
      .when('/Schutzhund', {
        templateUrl: 'views/schutzhund.html',
        controller: 'SchutzhundCtrl',
        activetab: 'Schutzhund'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
      $scope.part = $route.current.activetab;
    });

    $scope.showForm = function () {
      $('.contactRow').slideToggle();
    };

    $scope.closeForm = function () {
      $('.contactRow').slideUp();
    }
  }]);

app.config(['$locationProvider', function ($location) {
  $location.hashPrefix('!');
}]);