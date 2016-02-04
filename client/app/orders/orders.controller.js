'use strict';

angular.module('myNewProjectApp')
  .controller('OrdersCtrl',['$scope','orders','$state', function ($scope,orders,state) {
    $scope.message = 'Hello';
  }]);
