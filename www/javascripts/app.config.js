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
      name: 'register',
      url: '/register',
      component: "register"
    });


  $urlRouterProvider.otherwise('/');

  }

})();
