'use strict';

angular.module('myNewProjectApp.auth', [
  'myNewProjectApp.constants',
  'myNewProjectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
