'use strict';

describe('Directive: restrolist', function () {

  // load the directive's module
  beforeEach(module('myNewProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<restrolist></restrolist>');
    element = $compile(element)(scope);
    element.text().should.equal('this is the restrolist directive');
  }));
});
