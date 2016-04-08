'use strict';

describe('Controller: RestrolistCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var RestrolistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestrolistCtrl = $controller('RestrolistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
