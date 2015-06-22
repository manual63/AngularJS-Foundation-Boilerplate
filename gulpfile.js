var gulp = require( 'gulp' ),
sass = require( 'gulp-sass' ),
uglify = require( 'gulp-uglify' ),
concat = require( 'gulp-concat' ),
sourcemaps = require( 'gulp-sourcemaps' );

gulp.task( 'default', [ 'sass', 'move', 'uglify', 'concat-libs' ]);

gulp.task( 'sass', function() {
	return gulp.src( './src/sass/main.sass' )
		.pipe( sass() )
		.pipe( gulp.dest( './dist/css' ) );
});

var projectFiles = [
	'./src/js/AngularProject.js',
	'./src/js/controllers/*.js',
	'./src/js/services/*.js',
	'./src/js/directives/**/*.js'
];

gulp.task( 'uglify', function() {
	return gulp.src( projectFiles )
	.pipe( sourcemaps.init() )
	.pipe( concat( 'project.js' ) )
    .pipe( uglify({
        mangle: false
    }))
    .pipe( sourcemaps.write('./') )
    .pipe(gulp.dest( './dist/js' ));
});

var libraryFiles = [
	'./src/js/libs/jquery.js',
	'./src/js/libs/fastclick.js',
	'./src/js/libs/foundation.min.js',
	'./src/js/libs/angular.min.js',
	'./src/js/libs/angular-route.min.js',
	'./src/js/libs/angular-ui-router.min.js',
	'./src/js/libs/angular-resource.min.js'
];

gulp.task( 'concat-libs', function() {
	return gulp.src( libraryFiles )
	.pipe( concat( 'libraries.js' ) )
	.pipe( gulp.dest( './dist/js' ));
});

var directories = [
	'./src/data/*.json',
	'./src/views/*.html',
	'./src/index.html',
	'./src/js/libs/modernizr.js',
	'./src/css/foundation.min.css',
	'./src/js/directives/**/*.html',
	'./src/img/*'
]

gulp.task( 'move', function() {
	gulp.src( directories, { base: './src' })
		.pipe( gulp.dest( './dist/' ));
});