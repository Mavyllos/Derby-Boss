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
      name: 'login',
      url: '/login',
      component: "login"
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
    })
    .state({
      name: 'dashboard',
      url: '/dashboard',
      component: "dashboard"
    })
    .state({
      name: 'editLeague',
      url: '/edit-league',
      component: "editLeague"
    })
    .state({
      name: 'addMember',
      url: '/add-member',
      component: "addMember"
    })
    .state({
      name: 'allMembers',
      url: '/all-members',
      component: "allMembers"
    })
    .state({
      name: 'editMember',
      url: '/edit-member/{id}',
      component: "editMember"
    })
    .state({
      name: 'viewMember',
      url: '/view-member/{id}',
      component: "viewMember"
    })
    .state({
      name: 'addTeam',
      url: '/add-team',
      component: "addTeam"
    })
    .state({
      name: 'allTeams',
      url: '/all-teams',
      component: "allTeams"
    })
    .state({
      name: 'editTeam',
      url: '/edit-team',
      component: "editTeam"
    })
    .state({
      name: 'viewTeam',
      url: '/view-team',
      component: "viewTeam"
    });


  $urlRouterProvider.otherwise('/');

  }

})();
