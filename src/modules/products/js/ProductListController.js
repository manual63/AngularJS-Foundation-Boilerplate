angularProject.controller('ProductListController', function($scope, Products) {
	console.log( 'Initialized Product List Controller!');

	$scope.products = Products.query();
});