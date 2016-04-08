'use strict';

angular.module('myNewProjectApp')
 .factory('restro',['$http', function ($http) {
 
   var tmpData = [];

    // Public API here
    return {
      tempStoreUpdate:function(getDetails){
        tmpData.push(getDetails);

      },
      getDataFromTemp:function(){
        return tmpData;
      },
      updateHotel:function(updateHotelData){
        console.log("Updating object id is >>>",updateHotelData._id)
        var id = updateHotelData._id;
        return $http.put('/api/shops/custom/'+id,updateHotelData);
      },
      deleteHotelItem:function(getMenuDetails){
        console.log("Deleting object id is >>>",getMenuDetails._id)
        var id = getMenuDetails._id;
        return $http.delete('/api/shops/'+id,getMenuDetails);	
      },
       getAllDataBasedOnHotel: function () {
        return $http.get("/api/shops").success(function(results){

          return results;
        })
      }
    };
  }]);
