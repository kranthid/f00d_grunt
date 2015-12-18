'use strict';

angular.module('myNewProjectApp')
  .controller('CategoryCtrl', ['$scope','category', function ($scope,category) {
    $scope.formName = 'Create Category';
    $scope.saveCategory = function(categoryData){
		console.log("factory is working >>>",category,"data is >>>",categoryData);
		return category.saveData(categoryData).success(function(res){
			if(res){
				$scope.result= "Successfully added category";
				$('#title').val("");
			}else{
				$scope.result = "";
			}
		}).error(function(error){
			$scope.error = error
		})    	
    }
  }]);
