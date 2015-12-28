'use strict';

angular.module('myNewProjectApp')
  .controller('RecipesCtrl',['$scope','recipes', 'Upload', function ($scope,recipes,Upload) {
    $scope.formName = 'Create Menu Item';
    $scope.uploadFile= function(picFile){
    	$scope.files = picFile;
  		$scope.path = picFile.$ngfBlobUrl
          Upload.upload({
            url: '/cloud/upload',
            data: {file: picFile,path:$scope.path}
        }).then(function (resp) {
            console.log('Successfully uploaded >>'+resp);
            if(resp.data.path){
            	$scope.imageUrl = resp.data.path;
            }else{
            	$scope.imageUrl = "";
            }    
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }
    $scope.createMenuItem = function(menuData){
    	console.log("menuData is >>>",menuData);
    	var category = menuData.catvalue.title;
    	var imageUrl = $('#imageUrl').val();
    	var menuObj = {
    		category : category,
    		imageUrl : imageUrl,
    		title : menuData.title,
    		status : menuData.status,
    		price : menuData.price
    	};
    	return recipes.createMenu(menuObj).then(function(result){
    		console.log("result is >>",result);
    		if(result.data){
    			$scope.result = "Menu item was added successfully";	
    		}
    	},function(err){
    		console.log("err is >>>",err);
    		$scope.result = "Some thing went wrong";
    	})
    }
  }]);
