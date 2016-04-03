'use strict';

angular.module('myNewProjectApp')
  .factory('restro',['$http','$q', function ($http,$q) {
    // Public API here
    return {
      createMenuBasedOnHotel: function (menuData) {
      	console.log("Getting menu data into factory >>",menuData)
        return $http.post('/api/shops',menuData).success(function(response){
          return response;
        }).error(function(error){
          console.log("Error is >>>",error);
          return error
        })
      },
      getDataBasedOnHotel: function () {
        return $http.get("/api/shops").success(function(results){

          return results;
        })
      }
    };
  }]);