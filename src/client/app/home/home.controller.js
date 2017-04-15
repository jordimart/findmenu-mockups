(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['logger', '$translatePartialLoader', '$scope'];

    function HomeController(logger, $translatePartialLoader, $scope) {
        var vm = this;
        vm.title = 'Home';

        $scope.images = [{
            url: 'http://lorempixel.com/100/100/sports'
        }, {
            url: 'http://lorempixel.com/100/100/abstract'
        }, {
            url: 'http://lorempixel.com/100/100/business'
        }, {
            url: 'http://lorempixel.com/100/100/city'
        }, {
            url: 'http://lorempixel.com/100/100/technics'
        }, {
            url: 'http://lorempixel.com/100/100/cats'
        }];

        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $translatePartialLoader.addPart('home');

        activate();

        function activate() {
            logger.info('Activated Home View');

        }
    }
})();