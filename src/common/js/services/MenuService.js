var menuService = angular.module('MenuService', ['ngResource']);

menuService.factory('Menu', ['$resource',
	function($resource){
		return $resource('data/menu.json', {}, {
			query: {method:'GET', params:{}, isArray:true}
		});
	}
]);