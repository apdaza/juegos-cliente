'use strict';

describe('Controller: EludeCtrl', function () {

  // load the controller's module
  beforeEach(module('juegosClienteApp'));

  var EludeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EludeCtrl = $controller('EludeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EludeCtrl.awesomeThings.length).toBe(3);
  });
});
