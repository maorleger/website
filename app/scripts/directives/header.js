'use strict';

angular.module('websiteApp')
  .directive('header', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/navbar.html'
    };
  }]);
