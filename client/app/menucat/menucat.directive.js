'use strict';

angular.module('myNewProjectApp')
  .directive('menucat',['catlist', function (catlist) {
    return {
      templateUrl: 'app/menucat/menucat.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	console.log("catlist >>>",catlist)
		return catlist.getAllCategories().then(function(returnData){
			scope.dropdown = returnData.data;
		},function(error){
			scope.catlist = [];
		});
      }
    };
  }]);
