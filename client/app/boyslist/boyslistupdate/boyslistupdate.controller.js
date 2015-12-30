'use strict';

angular.module('myNewProjectApp')
  .controller('BoyslistupdateCtrl',['$scope','boyslist', function ($scope,boyslist) {
    $scope.formTitle = 'Update Form';
    $scope.data = boyslist.getDataFromTemp();
    $scope.dataTobeUpdated = $scope.data[0];
    $scope.saveBoys = function(updateDetails){
    	console.log(">>>>>>>>>>>>",updateDetails)
    	boyslist.updateBoysData(updateDetails).then(function(response){
    		console.log("response was >>>",response)
    		if(response.data._id){
    			$scope.updateResult = "Successfully updated";	
    		}else{
    			$scope.updateResult = "Verify data in list";
    		};	
    	},function(err){
    		console.log("Error is >>>",err)
    		$scope.updateResult = "Some thing went wrong";
    	});
    }
  }]);
