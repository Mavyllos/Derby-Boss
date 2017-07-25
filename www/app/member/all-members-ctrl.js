(function() {
  'use strict';

  angular.module("app")
  .component('allMembers', {
    templateUrl: '/www/app/member/all-members.html',

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
      vm.orderByField = response.first_name;
      vm.reverseSort = false;
      console.log(response.data);
    });
    }
  }
})();
