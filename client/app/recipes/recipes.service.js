'use strict';

angular.module('myNewProjectApp')
  .factory('recipes',['$http', function ($http) {
    // Public API here
    return {
      uploadFile: function (fileData) {
      	console.log("++++++++++++",fileData)
        var fd = new FormData();
         fd.append("uploadedFile", fileData);
        return $http.post('/cloud/upload',fd.fileObject,{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
      }
    };
  }]);
