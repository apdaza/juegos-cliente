'use strict';

describe('Controller: PerseguidoCtrl', function () {

  // load the controller's module
  beforeEach(module('juegosClienteApp'));

  var PerseguidoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerseguidoCtrl = $controller('PerseguidoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerseguidoCtrl.awesomeThings.length).toBe(3);
  });
});
