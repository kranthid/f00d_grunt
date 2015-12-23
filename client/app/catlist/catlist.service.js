'use strict';

angular.module('myNewProjectApp')
  .factory('catlist',['$http','$q', function ($http,$q) {
    var tmpData = [];
    // Public API here
    return {
      getAllCategories: function () {
        //return $http.get("/api/categories")
        var deferred = $q.defer();
        return $http.get("/api/categories").success(function(results){
          deferred.resolve(results)
          //return results;
          return deferred;
        })
      },
      updateCategory:function(updateCategoryData){
        console.log("Updating object id is >>>",updateCategoryData[0]._id)
        var id = updateCategoryData[0]._id;
        return $http.put('/api/categories/'+id,updateCategoryData[0]);
      },
      tempStoreUpdate:function(getDetails){
        tmpData.push(getDetails);

      },
      getDataFromTemp:function(){
        return tmpData;
      }
    };
  }]);
