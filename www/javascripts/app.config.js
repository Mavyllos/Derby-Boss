(function() {

angular.module('app').config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider

    .state({
      name: 'landing',
      url: '/',
      component: "landing"
    })
    .state({
      name: 'registerLeague',
      url: '/register-league',
      component: "registerLeague"
    })
    .state({
      name: 'registerAdmin',
      url: '/register-admin',
      component: "registerAdmin"
    });


  $urlRouterProvider.otherwise('/');

  }

})();
