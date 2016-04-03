'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restro', {
        url: '/restro',
        templateUrl: 'app/restro/restro.html',
        controller: 'RestroCtrl'
      });
  });
