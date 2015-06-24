angularProject.controller('ProductController', function($scope, $state, $stateParams, Products) {
	console.log( 'Initialized Product Controller!');
	$scope.productId = $stateParams.id;
	$scope.products = Products.query();
//console.log( $scope.products );
	var products = $scope.products;
	console.log( products );
	for( x in products ) {
		console.log( x );
		// var product = products[ x ];
		// console.log( product );
		// if( product.id === $scope.productId ) {
		// 	$scope.product = product;
		// 	console.log( product );
		// 	break;
		// }
	}
});