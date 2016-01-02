'use strict';

angular.module('myNewProjectApp')
  .controller('CatlistCtrl',['$scope','catlist','$state',function ($scope,catlist,$state) {
		$scope.title = 'List Of Categories';
		$scope.showCatlist = function(){
/*			return catlist.getAllCategories().then(function(returnData){
				$scope.catlist = returnData.data;
			},function(error){
				$scope.catlist = [];
			});*/
		}

		$scope.updateCategory = function(updateData){
    		console.log("Getting updated details >>>",updateData);
    		//$scope.tmpUpdateData = updateData
    		catlist.tempStoreUpdate(updateData);
    		$state.transitionTo('catlist/update',{id:updateData._id})
    	}
    	$scope.removeCategory = function(deletionItem){
    		console.log("Item to be deleted >>",deletionItem);
    		catlist.deleteCategory(deletionItem).then(function(res){
    			$scope.deletionResult = "Category was deleted successfully";
    			$state.reload();
    		},function(error){
    			$scope.deletionResult = "Some error occured"
    		})
    	}
	}]);
