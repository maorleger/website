'use strict';

describe('Directive: pdf', function () {

  // load the directive's module
  beforeEach(module('websiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pdf></pdf>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pdf directive');
  }));
});
