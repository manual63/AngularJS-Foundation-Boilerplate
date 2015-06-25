angularProject.controller('ProductController', function($scope, $state, $stateParams, Product) {
	console.log( 'Initialized Product Controller!');
	$scope.productId = $stateParams.id;
	$scope.product = Product.query({ productId: $scope.productId });
});