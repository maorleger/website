'use strict';

describe('Directive: ngGrid', function () {

  // load the directive's module
  beforeEach(module('websiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-grid></ng-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngGrid directive');
  }));
});
