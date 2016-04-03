'use strict';

angular.module('myNewProjectApp', [
  'myNewProjectApp.auth',
  'myNewProjectApp.admin',
  'myNewProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngFileUpload',
  'datatables',
  'ngTagsInput'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
