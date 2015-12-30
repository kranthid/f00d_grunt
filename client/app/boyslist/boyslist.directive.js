'use strict';

angular.module('myNewProjectApp')
  .directive('boyslist',['boyslist', function (boyslist) {
    return {
      templateUrl: 'app/boyslist/boyslist_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
  	    console.log("boyslist >>>",boyslist)
		return boyslist.getAllBoys().then(function(returnData){
			scope.boyslist = returnData.data;
		},function(error){
			scope.boyslist = [];
		});
      }
    };
  }]);
