'use strict';

var app = angular.module('websiteApp', ['ui.bootstrap', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })
      .state('schutzhund', {
        url: '/schutzhund',
        templateUrl: 'views/schutzhund.html',
        controller: 'SchutzhundCtrl'
      })
      .state('schutzhund.pics', {
        url: '',
        templateUrl: 'views/schutzhund-pics.html',
        controller: 'SchutzhundpicsCtrl'
      })
      .state('schutzhund.videos', {
        url: '',
        templateUrl: 'views/schutzhund-vids.html',
        controller: 'YouTubeselectorCtrl'
      });

  }).run(['$rootScope', '$http', '$browser', '$timeout', '$route', function ($scope, $http, $browser, $timeout, $route) {
    $scope.$on('$routeChangeSuccess', function (scope, next, current) {
      $scope.part = $route.current.activetab;
    });

    $scope.showForm = function () {
      $('.contactRow').slideToggle();
    };

    $scope.closeForm = function () {
      $('.contactRow').slideUp();
    };
  }]);


angular.module('websiteApp').value('$anchorScroll', angular.noop);