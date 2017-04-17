(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['logger', '$translatePartialLoader', '$scope', 'mockdata'];

    function HomeController(logger, $translatePartialLoader, $scope, mockdata) {
        var vm = this;
        vm.title = 'Home';
        vm.cards = mockdata.getMockRestaurants();
        vm.posts = mockdata.getMockPosts();

        $translatePartialLoader.addPart('home');

        activate();

        function activate() {
            logger.info('Activated Home View');

        }
    }
})();