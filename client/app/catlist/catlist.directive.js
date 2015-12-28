'use strict';

angular.module('myNewProjectApp')
  .directive('catlist',['catlist', function (catlist) {
    return {
      templateUrl: 'app/catlist/catlist_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	console.log("catlist >>>",catlist)
			return catlist.getAllCategories().then(function(returnData){
				scope.catlist = returnData.data;
			},function(error){
				scope.catlist = [];
			});
      }

    };
  }]);
