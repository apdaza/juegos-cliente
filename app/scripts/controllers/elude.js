'use strict';

/**
 * @ngdoc function
 * @name juegosClienteApp.controller:EludeCtrl
 * @description
 * # EludeCtrl
 * Controller of the juegosClienteApp
 */
angular.module('juegosClienteApp')
  .controller('EludeCtrl', function ($scope, $http) {
    $scope.juego = "Elude Asteroids";



    $scope.add = function(){

      var data = {
          Jugador: $scope.jugador,
          Juego: $scope.juego,
          Puntaje: parseInt($('input:text[name=puntaje]').val())
      };
      $http.post('http://localhost:8080/v1/puntaje',data)
      .then(function(response) {
          window.location.href = '#/';
      });
    }
  });
