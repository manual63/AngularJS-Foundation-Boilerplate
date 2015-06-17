angularProject.controller('LandingController', function($scope) {
	console.log( 'Initialized Landing Controller!');

	$scope.slides = [
		{
			img: './img/slide1.jpg',
			caption: 'This is slide 1',
		},
		{
			img: './img/slide2.jpg',
			caption: 'This is slide 2'
		},
		{
			img: './img/slide3.jpg',
			caption: 'This is slide 3'
		}
	];
});