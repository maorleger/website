'use strict';

angular.module('websiteApp')
  .controller('GridCtrl', ['$scope', 'dataSets', function ($scope, dataSets) {
    $scope.data = dataSets.getData($scope.name);
    // TODO: right now all rows are 50, but there is a plugin out there that allows resizeable rows. See if we can use it
    // TODO: See if I can replace the URL with a display name of sorts...
    $scope.gridOptions = {
      data: 'data',
      enableColumnResize: true,
      rowHeight: 50,
      columnDefs: [
        { field: 'name', displayName: 'Name', width: 120 },
        { field: 'url', displayName: 'URL', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}" target="_blank">{{row.getProperty(col.field)}}</a></div>'},
        { field: 'description', displayName: 'Description'}
      ]
    };
  }]);
