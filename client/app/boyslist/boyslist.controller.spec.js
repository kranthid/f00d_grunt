'use strict';

describe('Controller: BoyslistCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var BoyslistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoyslistCtrl = $controller('BoyslistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
