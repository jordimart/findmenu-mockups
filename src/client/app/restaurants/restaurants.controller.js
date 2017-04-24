(function() {
'use strict';

    angular
        .module('app.restaurants')
        .controller('RestaurantsController', RestaurantsController);

    RestaurantsController.inject = ['logger', '$translatePartialLoader', '$scope', 'mockdata'];
    function RestaurantsController(logger, $translatePartialLoader, $scope, mockdata) {
        var vm = this;
        vm.title = 'Restaurants';
        vm.cards = mockdata.getMockRestaurants();
        vm.radioModel = 'Left';
        vm.userIcon = {
                'scaledSize': [40, 40],
                'url': "../images/user-icon.png"
        };
        vm.findmenuIcon = "../images/findmenuGreen.png";
        vm.changeTags = changeTags;

        
        $translatePartialLoader.addPart('restaurants');

        activate();

        ////////////////

        function activate() { 
            logger.info('Activated Restaurants View');
        }
        function changeTags(){
            console.log(vm.radioModel);
            
        }
            
    }
})();