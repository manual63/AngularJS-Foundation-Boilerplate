angularProject.controller('MenuController', function($scope, Menu) {
	console.log( 'Initialized Menu Controller!');

    //Use Menu service to get list of menu items
	$scope.menuList = Menu.query();
});