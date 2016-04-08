'use strict';

describe('Service: restrolist', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var restrolist;
  beforeEach(inject(function (_restrolist_) {
    restrolist = _restrolist_;
  }));

  it('should do something', function () {
    !!restrolist.should.be.true;
  });

});
