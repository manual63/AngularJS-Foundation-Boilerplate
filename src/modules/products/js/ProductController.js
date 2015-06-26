angularProject.controller('ProductController', function($scope, $state, $stateParams, productData) {
	console.log( 'Initialized Product Controller!');
	$scope.productId = $stateParams.id;
	$scope.product = productData.query({ productId: $scope.productId });
});