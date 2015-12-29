'use strict';

angular.module('myNewProjectApp')
  .controller('RecipeupdateCtrl',['$scope','recipelist','Upload', function ($scope,recipelist,Upload) {
    $scope.formTitle = 'Update Form';
    console.log($scope.tmpUpdateData);
    $scope.dataFromDB = recipelist.getDataFromTemp();
    $scope.dataTobeUpdated = $scope.dataFromDB [0]
    $scope.uploadFile= function(picFile){
    	$scope.files = picFile;
  		$scope.path = picFile.$ngfBlobUrl
          Upload.upload({
            url: '/cloud/upload',
            data: {file: picFile,path:$scope.path}
        }).then(function (resp) {
            console.log('Successfully uploaded >>'+resp);
            if(resp.data.path){
            	$scope.dataTobeUpdated.imageUrl = resp.data.path;
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
