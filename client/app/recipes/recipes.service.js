'use strict';

angular.module('myNewProjectApp')
  .factory('recipes',['$http', function ($http) {
    // Public API here
    return {
      createMenu: function (menuData) {
      	console.log("++++++++++++",menuData)
        return $http.post('/api/menus',menuData).success(function(response){
          return response;
        }).error(function(error){
          console.log("Error is >>>",error);
          return error
        })
      }
    };
  }]);
