(function() {
  'use strict';

  angular.module("app")
  .component('addMember', {
    templateUrl: '/public/app/member/add-member.html',

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
