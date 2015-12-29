'use strict';

describe('Controller: BoysCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var BoysCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoysCtrl = $controller('BoysCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
