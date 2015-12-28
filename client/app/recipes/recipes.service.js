'use strict';

angular.module('myNewProjectApp')
  .factory('recipes',['$http', function ($http) {
    // Public API here
    return {
      createMenuItem: function (menuData) {
      	console.log("++++++++++++",menuData)
        return $http.post('/cloud/upload',fd.fileObject,{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
      }
    };
  }]);
