angularProject.controller('FAQController', function($scope, FAQ) {
	console.log( 'Initialized FAQ Controller!');

	$scope.faqs = FAQ.query();
});