(function() {
    'use strict';

    angular
        .module('app.contact')
        .controller('ContactController', ContactController);

    ContactController.inject = ['logger', '$translatePartialLoader'];

    function ContactController(logger, $translatePartialLoader) {
        var vm = this;
        vm.title = 'Contact';

        $translatePartialLoader.addPart('contact');

        activate();

        ////////////////

        function activate() {
            logger.info('Activated Contact View');
        }
    }
})();