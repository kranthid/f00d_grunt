'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boyslist', {
        url: '/boyslist',
        templateUrl: 'app/boyslist/boyslist.html',
        controller: 'BoyslistCtrl'
      });
  });
