'use strict';

angular.module('myNewProjectApp')
  .directive('recipelist',['recipes', function (recipes) {
    return {
      templateUrl: 'app/recipelist/recipe_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
			return recipes.getAllRecipies().then(function(returnData){
				scope.recipelist = returnData.data;
				console.log("data is >>>",returnData)
			},function(error){
				scope.recipelist = [];
			});
      }
    };
  }]);
