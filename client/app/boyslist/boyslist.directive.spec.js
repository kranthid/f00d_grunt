'use strict';

describe('Directive: boyslist', function () {

  // load the directive's module and view
  beforeEach(module('myNewProjectApp'));
  beforeEach(module('app/boyslist/boyslist.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<boyslist></boyslist>');
    element = $compile(element)(scope);
    scope.$apply();
    element.text().should.equal('this is the boyslist directive');
  }));
});
