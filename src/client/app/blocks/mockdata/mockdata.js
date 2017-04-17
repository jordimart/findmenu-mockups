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
                { image: '../images/grilled.jpg', name: 'Nombre restaurante 1', breackfast_price: 5, lunch_price: 7, dinner_price: 14, city: 'Ontinyent', valoration: '7/10', num_reviews: '200', users: '100' },
                { image: '../images/bruschetta.jpg', name: 'Nombre restaurante 2', breackfast_price: 4, launch_price: 6, dinner_price: 10, city: 'Ontinyent', valoration: '5/10', num_opinions: '2', users: '1000' },
                { image: '../images/finger-food.jpg', name: 'Nombre restaurante 3', breackfast_price: 4.5, launch_price: 9, dinner_price: 15, city: 'Ontinyent', valoration: '4/10', num_opinions: '100', users: '550' },
                { image: '../images/food-platter.jpg', name: 'Nombre restaurante 4', breackfast_price: 6, launch_price: 11, dinner_price: 13, city: 'Ontinyent', valoration: '2/10', num_opinions: '250', users: '320' },
                { image: '../images/pizza.jpg', name: 'Nombre restaurante 5', breackfast_price: 7, launch_price: 8, dinner_price: 12, city: 'Ontinyent', valoration: '6/10', num_opinions: '300', users: '2' },
                { image: '../images/salad.jpg', name: 'Nombre restaurante 6', breackfast_price: 5.5, launch_price: 10, dinner_price: 11, city: 'Ontinyent', valoration: '9/10', num_opinions: '90', users: '450' },
                { image: '../images/grilled.jpg', name: 'Nombre restaurante 7', breackfast_price: 4, launch_price: 9, dinner_price: 9, city: 'Ontinyent', valoration: '7/10', num_opinions: '68', users: '600' }
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