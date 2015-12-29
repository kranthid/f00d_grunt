'use strict';

describe('Directive: recipelist', function () {

  // load the directive's module and view
  beforeEach(module('myNewProjectApp'));
  beforeEach(module('app/recipelist/recipelist.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recipelist></recipelist>');
    element = $compile(element)(scope);
    scope.$apply();
    element.text().should.equal('this is the recipelist directive');
  }));
});
