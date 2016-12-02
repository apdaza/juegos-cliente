'use strict';

/**
 * @ngdoc overview
 * @name juegosClienteApp
 * @description
 * # juegosClienteApp
 *
 * Main module of the application.
 */
angular
  .module('juegosClienteApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/elude', {
        templateUrl: 'views/elude.html',
        controller: 'EludeCtrl',
        controllerAs: 'elude'
      })
      .when('/llorona', {
        templateUrl: 'views/llorona.html',
        controller: 'LloronaCtrl',
        controllerAs: 'llorona'
      })
      .when('/perseguido', {
        templateUrl: 'views/perseguido.html',
        controller: 'PerseguidoCtrl',
        controllerAs: 'perseguido'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
