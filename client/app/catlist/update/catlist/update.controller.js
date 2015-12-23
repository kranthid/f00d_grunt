'use strict';

angular.module('myNewProjectApp')
  .controller('CatlistUpdateCtrl',['$scope','catlist',function ($scope,catlist) {
    $scope.formTitle = 'Update Form';
    console.log($scope.tmpUpdateData);
    $scope.dataTobeUpdated = catlist.getDataFromTemp();
    $scope.updateCategory = function(updateDetails){
    	console.log(">>>>>>>>>>>>",updateDetails)
    	catlist.updateCategory(updateDetails).then(function(response){
    		console.log("response was >>>",response)
    		$scope.updateResult = "success";
    	})
    }

  }]);
