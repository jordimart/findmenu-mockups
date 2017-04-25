(function () {
    'use strict';

    angular
        .module('app.restaurants')
        .factory('filterRestaurants', filterRestaurants);

    function filterRestaurants($http, $q, exception, logger) {
        var service = {
            filterTags: filterTags
        };

        return service;


        /**
         * @param  {} radioModel Input parameter
         * @param  {} cards Object to which we will change the filters parameter
         */
        function filterTags(radioModel, cards) {
           
            switch (radioModel) {
                case 'breackfast_price':
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].filters = cards[i].breackfast_price;
                    }
                    break;
                case 'launch_price':
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].filters = cards[i].launch_price;
                    }
                    break;
                case 'dinner_price':
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].filters = cards[i].dinner_price;
                    }
                    break;
                case 'valoration':
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].filters = cards[i].valoration;
                    }
                    break;
                case 'users':
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].filters = cards[i].users;
                    }
                    break;
                default:
                    for (var i = 0; i < cards.length; i++) {
                        cards[i].filters = cards[i].breackfast_price;
                    }
            }
            return cards;
        }

    }

})();