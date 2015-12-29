'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recipelist', {
        url: '/recipelist',
        templateUrl: 'app/recipelist/recipelist.html',
        controller: 'RecipelistCtrl'
      });
  });
