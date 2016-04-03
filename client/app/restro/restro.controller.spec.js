'use strict';

describe('Controller: RestroCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var RestroCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestroCtrl = $controller('RestroCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
