angularProject.controller('LandingController', function($scope) {
	console.log( 'Initialized Landing Controller!');

	$scope.slides = [
		{
			img: './common/img/slide1.jpg',
			caption: 'Generation 5 Custom Black Camaro',
		},
		{
			img: './common/img/slide2.jpg',
			caption: 'New 2016 Camaro SS'
		},
		{
			img: './common/img/slide3.jpg',
			caption: '650 Horsepower Corvette Z06'
		}
	];
});