'use strict';

describe('Controller: SchutzhundCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var SchutzhundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchutzhundCtrl = $controller('SchutzhundCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
