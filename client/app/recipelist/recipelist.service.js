'use strict';

angular.module('myNewProjectApp')
  .factory('recipelist', function () {
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
      }
    };
  });
