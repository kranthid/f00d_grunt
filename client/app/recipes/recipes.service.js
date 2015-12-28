'use strict';

angular.module('myNewProjectApp')
  .factory('recipes',['$http', function ($http) {
    // Public API here
    return {
      createMenu: function (menuData) {
      	console.log("Getting menu data into factory >>",menuData)
        return $http.post('/api/recipies',menuData).success(function(response){
          return response;
        }).error(function(error){
          console.log("Error is >>>",error);
          return error
        })
      }
    };
  }]);
