'use strict';

angular.module('myNewProjectApp')
  .factory('recipelist',['$http', function ($http) {
    // Service logic
    // ...

    var tmpData = [];

    // Public API here
    return {
      tempStoreUpdate:function(getDetails){
        tmpData.push(getDetails);

      },
      getDataFromTemp:function(){
        return tmpData;
      },
      updateRecipe:function(updateRecipeData){
        console.log("Updating object id is >>>",updateRecipeData._id)
        var id = updateRecipeData._id;
        return $http.put('/api/recipies/'+id,updateRecipeData);
      },
    };
  }]);
