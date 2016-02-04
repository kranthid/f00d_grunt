'use strict';

angular.module('myNewProjectApp')
  .factory('orders',['$http', function ($http) {

    return {
      getAllOrders: function () {
        return $http.get('/api/orders');
      }
    };
  }]);
