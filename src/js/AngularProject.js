var angularProject = angular.module('AngularProject', ['ui.router', 'MenuService', 'FAQService']);

/**
 * Configure the Routes
 */
angularProject.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('404');

    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'LandingController',
            templateUrl: 'views/landing.html'
        })
        .state('products',{
            url: '/products',
            controller: 'ProductsController',
            templateUrl: 'views/products.html'            
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



 //  $routeProvider
 //    // Landing Page
 //    .when("/", {templateUrl: "views/landing.html", controller: "LandingController"})
 //    // Pages
 //    .when("/products", {templateUrl: "views/products.html", controller: "ProductsController"})
 //    .when("/about", {templateUrl: "views/about.html", controller: "AboutController"})
	// .when("/contact", {templateUrl: "views/contact.html", controller: "ContactController"})
	// .when("/faq", {templateUrl: "views/faq.html", controller: "FAQController"})
 //    .when("/404", {templateUrl: "views/404.html", controller: "ErrorController"})
 //    // else 404
 //    .otherwise({redirectTo: "/404"});
}]);