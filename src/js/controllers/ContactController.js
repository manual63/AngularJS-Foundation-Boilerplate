angularProject.controller('ContactController', function($scope) {
	console.log( 'Initialized Contact Controller!');
	$scope.messageData = {
		"name": "",
		"emailAddress": "",
		"message": ""
	}
});