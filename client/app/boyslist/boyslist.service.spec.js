'use strict';

describe('Service: boyslist', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var boyslist;
  beforeEach(inject(function (_boyslist_) {
    boyslist = _boyslist_;
  }));

  it('should do something', function () {
    !!boyslist.should.be.true;
  });

});
