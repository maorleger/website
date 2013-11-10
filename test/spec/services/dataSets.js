'use strict';

describe('Service: Datasets', function () {

  // load the service's module
  beforeEach(module('WebsiteApp'));

  // instantiate service
  var Datasets;
  beforeEach(inject(function (_Datasets_) {
    Datasets = _Datasets_;
  }));

  it('should do something', function () {
    expect(!!Datasets).toBe(true);
  });

});
