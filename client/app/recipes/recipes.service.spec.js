'use strict';

describe('Service: recipes', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var recipes;
  beforeEach(inject(function (_recipes_) {
    recipes = _recipes_;
  }));

  it('should do something', function () {
    !!recipes.should.be.true;
  });

});
