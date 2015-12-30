'use strict';

angular.module('myNewProjectApp')
  .factory('boyslist',['$http', function ($http) {
    // Service logic
    // ...

    var tmpData = [];

    // Public API here
    return {
      getAllBoys: function () {
        return $http.get('/api/boys');
      }
    };
  }]);
