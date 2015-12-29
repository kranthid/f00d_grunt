'use strict';

angular.module('myNewProjectApp')
  .factory('boys',['$http', function ($http) {

    var tmpData = [];

    // Public API here
    return {
      createBoy: function (getBoyDetails) {
        console.log("D boy details are >>",getBoyDetails);

        return $http.post('/api/boys',getBoyDetails);
      }
    };
  }]);
