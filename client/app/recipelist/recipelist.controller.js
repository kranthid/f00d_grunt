'use strict';

angular.module('myNewProjectApp')
  .controller('RecipelistCtrl',['$scope','recipes',function ($scope,recipes) {
    $scope.message = 'Hello';
    $scope.recipeList = function(){
    	console.log("getting data ")
    }
  }]);
