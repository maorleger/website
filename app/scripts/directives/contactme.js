'use strict';

angular.module('websiteApp')
  .directive('contactme', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/contact.html'
    };
  }]);
