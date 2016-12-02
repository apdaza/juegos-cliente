'use strict';

/**
 * @ngdoc function
 * @name juegosClienteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the juegosClienteApp
 */
angular.module('juegosClienteApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:8080/v1/puntaje?limit=0')
    .then(function(response) {
        $scope.anteriores = response.data;
    });
  });
