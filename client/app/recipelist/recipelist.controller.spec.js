'use strict';

describe('Controller: RecipelistCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var RecipelistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipelistCtrl = $controller('RecipelistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
