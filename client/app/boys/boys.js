'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boys', {
        url: '/boys',
        templateUrl: 'app/boys/boys.html',
        controller: 'BoysCtrl'
      });
  });
