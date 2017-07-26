(function() {
  'use strict';

  angular.module("app")
  .component('editMember', {
    templateUrl: '/app/member/edit-member.html',

    controller: controller
  });

  controller.$inject = ['$http', '$stateParams', '$state'];

  function controller($http, $stateParams, $state) {
    const vm = this;
    console.log('params', $stateParams.id);
    vm.$onInit = onInit;

    function onInit() {
    $http({
      method: 'GET',
      url: `https://sheltered-river-78388.herokuapp.com/members/${$stateParams.id}`
    }).then(response => {
      vm.members = response.data;
      vm.orderByField = response.first_name;
      vm.reverseSort = false;
      console.log(response.data);
      });
    }

    function onSubmit() {
      $http({
        method: 'PUT',
        url: `https://sheltered-river-78388.herokuapp.com/members/${$stateParams.id}`}).then(response => {
        state.go('allMembers');
      });
    }
  }
})();
