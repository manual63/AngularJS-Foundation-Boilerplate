var angularProject = angular.module('AngularProject', ['ui.router', 'MenuService', 'FAQService', 'ProductService']);

/**
 * Configure the Routes
 */
angularProject.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider ) {

    $urlRouterProvider
        .when('', '/')
        .otherwise('404');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'LandingController',
            templateUrl: 'views/landing.html'
        })
        .state('products',{
            url: '/products',
            controller: 'ProductsController',
            templateUrl: 'views/products.html'            
        })
        .state('products.list',{
            url: '/list',
            controller: 'ProductListController',
            templateUrl: 'views/productlist.html'
        })
        .state('products.list.product',{
            url: '/product/:id',
            controller: 'ProductController',
            templateUrl: 'views/product.html'
        })
        .state('about',{
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        })
        .state('contact',{
            url: '/contact',
            controller: 'ContactController',
            templateUrl: 'views/contact.html'
        })
        .state('faq', {
            url: '/faq',
            controller: 'FAQController',
            templateUrl: 'views/faq.html'
        })
        .state('404', {
            url: '/404',
            controller: 'ErrorController',
            templateUrl: 'views/404.html'
        });
}]);