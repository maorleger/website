'use strict';

describe('Controller: ResumeCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var ResumeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumeCtrl = $controller('ResumeCtrl', {
      $scope: scope
    });
  }));

});
