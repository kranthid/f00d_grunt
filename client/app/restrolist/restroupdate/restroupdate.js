'use strict';

angular.module('myNewProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restroupdate', {
        url: '/restroupdate/:mid',
        templateUrl: 'app/restrolist/restroupdate/restroupdate.html',
        controller: 'RestroupdateCtrl'
      });
  });
