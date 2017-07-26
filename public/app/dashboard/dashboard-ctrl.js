(function() {
  'use strict';

  angular.module("app")
  .component('dashboard', {
    templateUrl: '/app/dashboard/dashboard.html',

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
      }).then(response => {
        vm.members = response.data;
        vm.orderByFieldDues = response.first_name;
        vm.orderByFieldExp = response.first_name;
        vm.reverseSortDues = false;
        vm.reverseSortExp = false;
        // vm.duesDate = response.dues_paid;
        //
        // duesDate = new Date();
        // duesDate.push(response.dues_paid.setFullYear(response.dues_paid.getFullYear() + 1));

        console.log(response.data);
      });
    }
  }
})();
