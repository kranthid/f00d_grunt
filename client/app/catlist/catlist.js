'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('catlist', {
        url: '/catlist',
        templateUrl: 'app/catlist/catlist.html',
        controller: 'CatlistCtrl'
      });
  });
