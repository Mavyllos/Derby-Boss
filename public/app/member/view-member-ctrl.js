(function() {
  'use strict';

  angular.module("app")
  .component('viewMember', {
    templateUrl: '/app/member/view-member.html',

    controller: controller
  });

  controller.$inject = ['$http', '$stateParams'];

  function controller($http, $stateParams) {
    const vm = this;
    console.log('params', $stateParams.id)
    vm.$onInit = onInit;

    function onInit(){

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
  }
})();
