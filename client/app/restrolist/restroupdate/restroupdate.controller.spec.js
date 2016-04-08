'use strict';

describe('Controller: RestroupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var RestroupdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestroupdateCtrl = $controller('RestroupdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
