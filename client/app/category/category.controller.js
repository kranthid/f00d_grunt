'use strict';

angular.module('myNewProjectApp')
  .controller('CategoryCtrl', ['$scope','category','Upload', function ($scope,category,Upload) {
    $scope.formName = 'Create Category';
    $scope.saveCategory = function(categoryData){
		console.log("factory is working >>>",category,"data is >>>",categoryData);
		var imageUrl = $('#imageUrl').val();
		var categoryObject = {
			imageUrl : imageUrl,
			title:categoryData.title
		}
		return category.saveData(categoryObject).success(function(res){
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
    $scope.uploadFile= function(picFile){
    	$scope.files = picFile;
  		$scope.path = picFile.$ngfBlobUrl
          Upload.upload({
            url: '/cloud/upload',
            data: {file: picFile}
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
  }]);
