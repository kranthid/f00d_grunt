'use strict';

angular.module('myNewProjectApp')
  .directive('orders',['orders', function (orders) {
    return {
      templateUrl: 'app/orders/orders_list.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
  	    console.log("boyslist >>>",orders)
		return orders.getAllOrders().then(function(returnData){
			scope.orderslist = returnData.data;
		},function(error){
			scope.orderslist = [];
		});
      }
    };
  }]);
