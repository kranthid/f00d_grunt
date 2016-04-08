'use strict';

angular.module('myNewProjectApp')
  .controller('RestrolistCtrl',['$scope','restro','$state',function ($scope,restroser,$state) {
    $scope.message = 'Hello';
    $scope.updateMenuItem = function(getMenuDetails){
    	restroser.tempStoreUpdate(getMenuDetails);
    	$state.transitionTo('restroupdate',{mid:getMenuDetails._id})
    }
    $scope.removeMenuItem = function(getMenuDetails){
    		console.log("Item to be deleted >>",getMenuDetails);
            var deleteDecision = prompt("Are you sure...Then type DELETE");
            if(deleteDecision == "DELETE"){
                restroser.deleteHotelItem(getMenuDetails).then(function(res){
                    $scope.deletionResult = "Hotel was deleted successfully";
                    $state.reload();
                },function(error){
                    $scope.deletionResult = "Some error occured"
                })

            }else{
                alert("Your Menu Item is not yet deleted")

            }

    }
  }])
