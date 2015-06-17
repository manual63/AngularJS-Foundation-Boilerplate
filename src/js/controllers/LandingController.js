angularProject.controller('LandingController', function($scope) {
	console.log( 'Initialized Landing Controller!');

	$scope.slides = [
		{
			img: './img/slide1.jpg',
			caption: 'Generation 5 Custom Black Camaro',
		},
		{
			img: './img/slide2.jpg',
			caption: 'New 2016 Camaro SS'
		},
		{
			img: './img/slide3.jpg',
			caption: '650 Horsepower Corvette Z06'
		}
	];
});