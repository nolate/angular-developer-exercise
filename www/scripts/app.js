(function () {
  'use strict';

  angular.module('shoppingCart', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('confirmation', {
      url: '/confirmation',
      templateUrl: 'views/confirmation.html',
      controller: 'ConfirmationController'
    });

    $urlRouterProvider.otherwise('home');
  });
})();