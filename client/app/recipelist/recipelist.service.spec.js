'use strict';

describe('Service: recipelist', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var recipelist;
  beforeEach(inject(function (_recipelist_) {
    recipelist = _recipelist_;
  }));

  it('should do something', function () {
    !!recipelist.should.be.true;
  });

});
