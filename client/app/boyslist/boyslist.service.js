'use strict';

angular.module('myNewProjectApp')
  .factory('boyslist',['$http', function ($http) {
    // Service logic
    // ...

    var tmpData = [];

    // Public API here
    return {
      getAllBoys: function () {
        return $http.get('/api/boys');
      },
      updateBoysData:function(updateData){
        console.log("Updating object id is >>>",updateData._id)
        var id =updateData._id;
        return $http.put('/api/boys/'+id,updateData);
      },
      tempStoreUpdate:function(getDetails){
        tmpData.push(getDetails);
      },
      getDataFromTemp:function(){
        return tmpData;
      },
      deleteBoy:function(boyData){
        console.log("Id is >>>",boyData._id);
        var id = boyData._id;
        return $http.delete('/api/boys/'+id);
      }
    };
  }]);
