'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restrolist', {
        url: '/restrolist',
        templateUrl: 'app/restrolist/restrolist.html',
        controller: 'RestrolistCtrl'
      });
  });
