(function () {
  'use-strict';

  var HomeController = function ($scope, $state, User) {
    $scope.User = User;

    $scope.goToConfirmationPage = function () {
      /*
        I could use ui-sref to navigate to the confirmation page
        but I better like this way. Maybe in the future I'll need to
        wait for codes to finish before navigating. Also I could make
        a service for the navigation but now I have only 2 pages.
      */
      $state.go('confirmation');
    }

    $scope.products = [
      {
        id: 1,
        name: 'Genelec G Two active speaker',
        price: 9000
      }, {
        id: 2,
        name: 'Onkyo C-N7050 CD player',
        price: 1200
      }, {
        id: 3,
        name: '5 meter RCA stereo audio cable',
        price: 90
      }, {
        id: 4,
        name: 'Manowar - Hail to England CD',
        price: 500
      }
    ];
  };

  angular.module('shoppingCart').controller('HomeController', HomeController);
})();