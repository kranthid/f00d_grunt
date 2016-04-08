'use strict';

angular.module('myNewProjectApp')
    .controller('RestroupdateCtrl',['$scope','restro',function ($scope,restroser) {
    $scope.formTitle = 'Restro update form';
    console.log($scope.tmpUpdateData);
    $scope.dataFromDB = restroser.getDataFromTemp();
    $scope.dataTobeUpdated = _.findLast($scope.dataFromDB)
    $scope.updateMenuItem = function(hotelDetails,row){
    	restroser.updateHotel(hotelDetails).then(function(response){
    		console.log("response was >>>",response)
    		if(response.data.nModified > 0){
    			$scope.updateResult = "Successfully updated";	
    		}else{
    			$scope.updateResult = "Operation done but verify one more time";
    		}
    		
    	},function(error){
    		console.log("error is >>>",error);
    		$scope.error = "Some thing went wrong"
    	})
    }
    $scope.tmpUpdate = function(tmpData,index,dataTobeUpdated){
        console.log("getting tmp data >>>>",tmpData,">>>>>",index,">>>>>>>>",dataTobeUpdated);
        //dataTobeUpdated.mcard[index]
    }

  }])
.directive('contenteditable', function() {
    return {
        restrict: 'AE',
        // only activate on element attribute
        require: '?ngModel',
        // get a hold of NgModelController
        link: function(scope, element, attrs, ngModel) {
            if (!ngModel) return; // do nothing if no ng-model
            // Specify how UI should be updated
            ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
            };

            // Listen for change events to enable binding
            element.bind('blur keyup change', function() {
                scope.$apply(read);
            });
            //read(); // initialize
            // Write data to the model

            function read() {
                ngModel.$setViewValue(element.html());
            }
        }
    };
});
