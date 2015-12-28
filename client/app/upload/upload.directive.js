'use strict';

angular.module('myNewProjectApp')
  .directive('upload', function () {
    return {
      templateUrl: 'app/upload/upload.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
