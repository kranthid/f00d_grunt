'use strict';

angular.module('myNewProjectApp')
  .controller('RecipelistCtrl',['$scope','recipes','recipelist','$state',function ($scope,recipes,recipelist,$state) {
    $scope.message = 'Hello';
    $scope.recipeList = function(){
    	console.log("getting data ")
    }
    $scope.updateMenuItem = function(getMenuDetails){
    	recipelist.tempStoreUpdate(getMenuDetails);
    	$state.transitionTo('recipeupdate',{id:getMenuDetails._id})
    }
    $scope.removeMenuItem = function(getMenuDetails){
    		console.log("Item to be deleted >>",getMenuDetails);
    		recipelist.deleteRecipeItem(getMenuDetails).then(function(res){
    			$scope.deletionResult = "Category was deleted successfully";
    			$state.reload();
    		},function(error){
    			$scope.deletionResult = "Some error occured"
    		})
    }
  }]);
