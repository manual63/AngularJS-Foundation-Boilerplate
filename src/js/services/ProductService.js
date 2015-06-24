var productService = angular.module('ProductService', ['ngResource']);

productService.factory('Products', ['$resource',
	function($resource){
		return $resource('data/products.json', {}, {
			query: {method:'GET', params:{}, isArray:true}
		});
	}
]);