angularProject.directive('slideShow', function() {
  return {
    scope: {},
    restrict: 'AE',
    replace: true,
    templateUrl: './js/directives/slideshow/slideshow.html',
    link: function(scope, elem, attrs) {
      scope.slides = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg"];

      setTimeout( function() {
        $(document).foundation('orbit');
      }, 0);
      
    }
  };
});