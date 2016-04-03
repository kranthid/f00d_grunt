'use strict';

angular.module('myNewProjectApp')
.controller('RestroCtrl', customCrudTable)
  .controller('RestroCtrl',['$scope','restro',  function ($scope,restro) {
    $scope.message = 'Hello';
    $scope.mitems = []
    $scope.createMenuItem = function(input){
    	console.log("Coming data >>>"+input)
		_.forEach(input.items,function(data,index){
		console.log("data is s>>>>>",index)
		var tmp = data.text.split('|')
		var tmpObj = {"name":tmp[0],"price":tmp[1],"category":tmp[2]}
		console.log("tmp is >>>",tmpObj)
		input.items[index] = tmpObj
		})
		var hotelObj = {
    		name : input.title,
    		location : input.location,
    		mcard : input.items,
    		special : []
    	};

    	return restro.createMenuBasedOnHotel(hotelObj).then(function(result){
    		console.log("result is >>",result);
    		if(result.data){
    			$scope.result = "Menu item was added successfully";	
    		}
    	},function(err){
    		console.log("err is >>>",err);
    		$scope.result = "Some thing went wrong";
    	})
    }
  }]);
 function customCrudTable($resource, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.persons = $resource('data1.json').query();
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];
    vm.person2Add = _buildPerson2Add(1);
    vm.addPerson = addPerson;
    vm.modifyPerson = modifyPerson;
    vm.removePerson = removePerson;
    function _buildPerson2Add(id) {
        return {
            id: id,
            firstName: 'Foo' + id,
            lastName: 'Bar' + id
        };
    }
    function addPerson() {
        vm.persons.push(angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function modifyPerson(index) {
        vm.persons.splice(index, 1, angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function removePerson(index) {
        vm.persons.splice(index, 1);
    }
} 
