'use strict';

describe('Service: category', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var category;
  beforeEach(inject(function (_category_) {
    category = _category_;
  }));

  it('should do something', function () {
    !!category.should.be.true;
  });

});
