(function () {
  'use-strict';

  var ConfirmationController = function ($scope, $state, User) {
    $scope.User = User;

    $scope.confirmPurchase = function () {
      User.sendConfirmation().then(function (result) {
        User.choosenItems = [];
        localStorage.removeItem('cartContent');

        alert(result);

        $state.go('home');
      });
    }

    $scope.print = function () {
      window.print();
    }
  }

  angular.module('shoppingCart').controller('ConfirmationController', ConfirmationController);
})();