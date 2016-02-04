'use strict';

describe('Directive: orders', function () {

  // load the directive's module and view
  beforeEach(module('myNewProjectApp'));
  beforeEach(module('app/orders/orders.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<orders></orders>');
    element = $compile(element)(scope);
    scope.$apply();
    element.text().should.equal('this is the orders directive');
  }));
});
