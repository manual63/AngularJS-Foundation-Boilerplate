angularProject.controller('ContactController', function($scope, $state, Contact) {
	console.log( 'Initialized Contact Controller!');
	$scope.messageData = {
		"name": "",
		"emailAddress": "",
		"message": ""
	}

	$scope.saveForm = function() {
		$state.go('contact.result');
		$scope.result = Contact.save( $scope.messageData );
	}
});