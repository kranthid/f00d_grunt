'use strict';

describe('Service: boys', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var boys;
  beforeEach(inject(function (_boys_) {
    boys = _boys_;
  }));

  it('should do something', function () {
    !!boys.should.be.true;
  });

});
