'use strict';

angular.module('myNewProjectApp')
  .controller('RecipesCtrl',['$scope','recipes', 'Upload', function ($scope,recipes,Upload) {
    $scope.message = 'Hello';
    $scope.uploadFile= function(picFile){
    	console.log("++++++++++++++",$scope.file);
    	  //var formData = new FormData();
         // formData.fileObject = document.getElementById('file').files[0];
    	//fileData = $scope.fileModel;
    	$scope.files = picFile;
/*		return recipes.uploadFile($scope.files).success(function(res){
			if(res){
				$scope.fileResult = "Successfully added file";
			}else{
				$scope.fileResult = "";
			}
		}).error(function(error){
			$scope.error = error
		})*/
          Upload.upload({
            url: '/cloud/upload',
            data: {file: picFile}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });

    }
  }]);
