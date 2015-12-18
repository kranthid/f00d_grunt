'use strict';

angular.module('myNewProjectApp')
  .factory('category',['$http', function ($http) {
    // Public API here
    return {
      saveData: function (categoryData) {
      	return $http.post('/api/categories',categoryData);
      }
    };
  }]);
