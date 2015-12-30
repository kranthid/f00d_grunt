'use strict';

angular.module('myNewProjectApp')
  .controller('BoyslistCtrl',['$scope','boyslist','$state', function ($scope,boyslist,$state) {
    $scope.message = 'Hello';
    $scope.updateBoyItem = function(boysData){
	    console.log("Getting updated details >>>",boysData);
		//$scope.tmpUpdateData = updateData
		boyslist.tempStoreUpdate(boysData);
		$state.transitionTo('boyslistupdate',{id:boysData._id})
    }
    $scope.removeBoyItem = function(boysData){
		console.log("Item to be deleted >>",boysData);
		boyslist.deleteBoy(boysData).then(function(res){
			$scope.deletionResult = "Boys data was deleted successfully";
			$state.reload();
		},function(error){
			$scope.deletionResult = "Some error occured"
		})
    }
  }]);
