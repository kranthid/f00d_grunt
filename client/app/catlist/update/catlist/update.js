'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('catlist/update', {
        url: '/catlist/update/:id',
        templateUrl: 'app/catlist/update/catlist/update.html',
        controller: 'CatlistUpdateCtrl'
      });
  });
