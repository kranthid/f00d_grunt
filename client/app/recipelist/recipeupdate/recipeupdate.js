'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recipeupdate', {
        url: '/recipeupdate/:id',
        templateUrl: 'app/recipelist/recipeupdate/recipeupdate.html',
        controller: 'RecipeupdateCtrl'
      });
  });
