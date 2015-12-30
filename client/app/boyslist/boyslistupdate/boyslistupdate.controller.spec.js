'use strict';

describe('Controller: BoyslistupdateCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var BoyslistupdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoyslistupdateCtrl = $controller('BoyslistupdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
