'use strict';

describe('Controller: SchutzhundpicsCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var SchutzhundpicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchutzhundpicsCtrl = $controller('SchutzhundpicsCtrl', {
      $scope: scope
    });
  }));

});
