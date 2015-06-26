var angularProject = angular.module('AngularProject', 
    [
        'ui.router', 
        'MenuService', 
        'FAQService', 
        'ProductService',
        'ContactService', 
        'ngSanitize'
    ]);

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
            templateUrl: 'modules/landing/views/landing.html'
        })
        .state('products',{
            url: '/products',
            controller: 'ProductsController',
            templateUrl: 'modules/products/views/products.html'            
        })
        .state('products.list',{
            url: '/list',
            controller: 'ProductListController',
            templateUrl: 'modules/products/views/productlist.html'
        })
        .state('products.list.product',{
            url: '/product/:id',
            controller: 'ProductController',
            templateUrl: 'modules/products/views/product.html',
            resolve: {
                productData: function($q, Product) {
                    return Product;
                }
            }
        })
        .state('about',{
            url: '/about',
            controller: 'AboutController',
            templateUrl: 'modules/about/views/about.html'
        })
        .state('contact',{
            url: '/contact',
            controller: 'ContactController',
            templateUrl: 'modules/contact/views/contact.html'
        })
        .state('contact.form', {
            url: '/contact/form',
            templateUrl: 'modules/contact/views/form.html'
        })
        .state('contact.result',{
            url: '/contact/result',
            templateUrl: 'modules/contact/views/result.html'
        })
        .state('faq', {
            url: '/faq',
            controller: 'FAQController',
            templateUrl: 'modules/faq/views/faq.html'
        })
        .state('404', {
            url: '/404',
            controller: 'ErrorController',
            templateUrl: 'modules/errors/views/404.html'
        });
}]);
