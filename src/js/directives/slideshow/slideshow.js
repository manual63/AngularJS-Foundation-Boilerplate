angularProject.directive('slideShow', function() {
  return {
    scope: {},
    restrict: 'AE',
    replace: true,
    templateUrl: './js/directives/slideshow/slideshow.html',
    link: function(scope, elem, attrs) {
      scope.slides = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg"];

      // elem.bind('click', function() {
      //   //elem.css('background-color', 'white');
      //   scope.$apply(function() {
      //     scope.slides = ["white", "purple", "brown"];
      //   });
      // });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});