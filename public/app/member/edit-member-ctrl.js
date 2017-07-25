(function() {
  'use strict';

  angular.module("app")
  .component('editMember', {
    templateUrl: '/app/member/edit-member.html',

    controller: controller
  });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = onInit;

    function onInit(){

    $http({
      method: 'PUT',
      url: 'https://sheltered-river-78388.herokuapp.com/members/:id'
    }).then(response => vm.members = response.data);
    }
  }
})();
