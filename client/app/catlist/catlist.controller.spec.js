'use strict';

describe('Controller: CatlistCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var CatlistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatlistCtrl = $controller('CatlistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
