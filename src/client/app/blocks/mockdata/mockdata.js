(function() {
    'use strict';

    angular
        .module('blocks.mockdata')
        .factory('mockdata', mockdata);

    /* @ngInject */
    function mockdata() {
        var service = {

            getMockRestaurants: getMockRestaurants,
            getMockPosts: getMockPosts

        };

        return service;
        /////////////////////

        function getMockRestaurants() {
            return [
                { image: '../images/grilled.jpg', name: 'Bar el LLombo', breackfast_price: 5, lunch_price: 7, dinner_price: 14, city: 'Ontinyent', valoration: '7/10', num_reviews: '200', users: '100',lat:38.81867897937066, lon: -0.6092698127031326 },      
                { image: '../images/finger-food.jpg', name: 'La Tardor', breackfast_price: 4.5, launch_price: 9, dinner_price: 15, city: 'Ontinyent', valoration: '4/10', num_opinions: '100', users: '550',lat:38.818269377532786, lon: -0.6107631325721741 },
                { image: '../images/food-platter.jpg', name: 'El tirador', breackfast_price: 6, launch_price: 11, dinner_price: 13, city: 'Ontinyent', valoration: '2/10', num_opinions: '250', users: '320',lat:38.82526990128548, lon: -0.6088252365589142 },
                { image: '../images/pizza.jpg', name: 'El encuentro', breackfast_price: 7, launch_price: 8, dinner_price: 12, city: 'Ontinyent', valoration: '6/10', num_opinions: '300', users: '2',lat: 38.813592226254336, lon: -0.6084725260734558 },
                { image: '../images/salad.jpg', name: 'Hermanos camineros', breackfast_price: 5.5, launch_price: 10, dinner_price: 11, city: 'Villena', valoration: '9/10', num_opinions: '90', users: '450',lat:38.64530882678072, lon: -0.8681391924619675 },       
                { image: '../images/grilled.jpg', name: 'Restaurante el Poligon', breackfast_price: 4, launch_price: 9, dinner_price: 9, city: 'Carlet', valoration: '7/10', num_opinions: '68', users: '600',lat:39.232326896777074, lon: -0.4890076071023941 },
                { image: '../images/bruschetta.jpg', name: 'La Taska', breackfast_price: 4, launch_price: 6, dinner_price: 10, city: 'Ontinyent', valoration: '5/10', num_opinions: '2', users: '1000',lat:38.818956922133204, lon: -0.6107215583324432  }
            ];
        }

        function getMockPosts() {
            return [
                { image: '../images/grilled.jpg', name: 'Noticia 1', text_resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ligula tellus, vehicula et enim auctor, elementum varius enim.' },
                { image: '../images/bruschetta.jpg', name: 'Noticia 2', text_resume: 'Donec ultricies lacus in augue finibus, nec pulvinar nisi venenatis. Cras vestibulum egestas consequat. Proin eget aliquet nulla' },
                { image: '../images/food-platter.jpg', name: 'Noticia 3', text_resume: 'Nunc lobortis tortor sit amet est faucibus, tincidunt sollicitudin lacus hendrerit. Maecenas quis purus congue,' },
                { image: '../images/pizza.jpg', name: 'Noticia 4', text_resume: 'Suspendisse scelerisque sed ante quis cursus. Donec tempus justo convallis condimentum volutpat. Nunc et auctor massa.' },
                { image: '../images/salad.jpg', name: 'Noticia 5', text_resume: 'Aenean consequat turpis a nunc rhoncus, finibus finibus augue commodo.' },
                { image: '../images/finger-food.jpg', name: 'Noticia 6', text_resume: 'Proin risus leo, volutpat non enim in, accumsan blandit elit. Donec a risus sodales, porta nisl gravida, porta augue. Morbi quis ligula id dolor eleifend fermentum ac at ipsum.' },
            ];
        }
    }
}());