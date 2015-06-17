angularProject.directive('slideShow', function() {
  return {
    scope: {},
    restrict: 'AE',
    replace: true,
    templateUrl: './js/directives/slideshow/slideshow.html',
    link: function(scope, elem, attrs) {
      scope.slides = scope.$eval(attrs.slides);

      setTimeout( function() {
        $(document).foundation('orbit');
      }, 0);
      
    },
  };
});