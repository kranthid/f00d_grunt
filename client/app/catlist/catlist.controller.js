'use strict';

angular.module('myNewProjectApp')
  .controller('CatlistCtrl',['$scope','catlist', function ($scope,catlist) {
		$scope.title = 'List Of Categories';
		$scope.showCatlist = function(){
			return catlist.getAllCategories().then(function(returnData){
				$scope.catlist = returnData.data;
			}).error(function(err){
				$scope.error = err;
			});
		}
	}]);
