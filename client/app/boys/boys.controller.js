'use strict';

angular.module('myNewProjectApp')
  .controller('BoysCtrl',['$scope','boys', function ($scope,boys) {
    $scope.formTitle = 'Delivery Boys Creation Form';
    $scope.saveBoys = function(boysDetails){
    	boys.createBoy(boysDetails).then(function(resp){
    		$scope.result = "Delivery boy was added to database";
    	},function(err){
    		console.log("Error is >>",err)
    		$scope.errResult = "Some thing went wrong"
    	})
    }
  }]);
