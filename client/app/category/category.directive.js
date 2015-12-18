'use strict';

angular.module('myNewProjectApp')
  .directive('category', function () {
    return {
      templateUrl: 'app/category/category.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
