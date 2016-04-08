'use strict';

angular.module('myNewProjectApp')
  .directive('restrolist',['restro', function (restrolist) {
    return {
      templateUrl: 'app/restrolist/restrolist_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
			return restrolist.getAllDataBasedOnHotel().then(function(returnData){
				scope.restrolist = returnData.data;
				console.log("data is >>>",returnData)
			},function(error){
				scope.restrolist = [];
			});
      }
    };
  }]);