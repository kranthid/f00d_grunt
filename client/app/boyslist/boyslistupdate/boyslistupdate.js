'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boyslistupdate', {
        url: '/boyslist/update/:id',
        templateUrl: 'app/boyslist/boyslistupdate/boyslistupdate.html',
        controller: 'BoyslistupdateCtrl'
      });
  });
