'use strict';

describe('Controller: LloronaCtrl', function () {

  // load the controller's module
  beforeEach(module('juegosClienteApp'));

  var LloronaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LloronaCtrl = $controller('LloronaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LloronaCtrl.awesomeThings.length).toBe(3);
  });
});
