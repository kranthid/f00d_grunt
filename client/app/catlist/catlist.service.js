'use strict';

angular.module('myNewProjectApp')
  .factory('catlist',['$http', function ($http) {

    // Public API here
    return {
      getAllCategories: function () {
        //return $http.get("/api/categories")
        return $http.get("/api/categories").success(function(results){
          return results.data;
        })
      }
    };
  }]);
