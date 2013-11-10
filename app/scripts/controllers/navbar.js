'use strict';

angular.module('websiteApp')
  .controller('NavbarCtrl', ['$scope', "$http", function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.navCollapsed = false;

    $scope.save = function () {
      $scope.loaded = true;
      $scope.process = true;
      $http.post('/sendemail.php', $scope.message)
        .success(function () {
          $scope.success = true;
          $scope.process = false;
        })
        .error(function () {
          $scope.failure = true;
          $scope.process = false;
        });
    }


  }]);
