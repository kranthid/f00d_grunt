'use strict';

describe('Service: restro', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var restro;
  beforeEach(inject(function (_restro_) {
    restro = _restro_;
  }));

  it('should do something', function () {
    !!restro.should.be.true;
  });

});
