var angularProject = angular.module('AngularProject', ['ngRoute', 'MenuService']);

/**
 * Configure the Routes
 */
angularProject.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Landing Page
    .when("/", {templateUrl: "views/landing.html", controller: "LandingController"})
    // Pages
    .when("/products", {templateUrl: "views/products.html", controller: "ProductsController"})
    .when("/about", {templateUrl: "views/about.html", controller: "AboutController"})
	.when("/contact", {templateUrl: "views/contact.html", controller: "ContactController"})
	.when("/faq", {templateUrl: "views/faq.html", controller: "FAQController"})
    .when("/404", {templateUrl: "views/404.html", controller: "ErrorController"})
    // else 404
    .otherwise({redirectTo: "/404"});
}]);