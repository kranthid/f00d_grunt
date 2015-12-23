'use strict';

describe('Controller: CatlistUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var CatlistUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatlistUpdateCtrl = $controller('CatlistUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
