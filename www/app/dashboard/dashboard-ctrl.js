(function() {
  'use strict';

  angular.module("app")
  .component('dashboard', {
    templateUrl: '/www/app/dashboard/dashboard.html',

    controller: controller
  });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){

    $http({
      method: 'GET',
      url: 'https://sheltered-river-78388.herokuapp.com/members'
    }).then(response => vm.members = response.data);
    }
  }
})();
