'use strict';

angular.module('websiteApp')
  .directive('ngGrid', function () {
    var finishedTemplate = '<div class="{{wrapper}}" ng-controller="GridCtrl" >\n <h2>{{header}}</h2>\n  <div class="gridStyle" ng-grid="gridOptions" name="{{name}}"></div>\n</div>\n';
    return {
      template: finishedTemplate,
      restrict: 'E',
      scope: {
        wrapper: '@',
        header: '@',
        name: '='
      }
    };
  });
