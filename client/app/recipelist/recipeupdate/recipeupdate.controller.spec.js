'use strict';

describe('Controller: RecipeupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var RecipeupdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeupdateCtrl = $controller('RecipeupdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
