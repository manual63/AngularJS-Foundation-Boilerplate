var gulp = require( 'gulp' ),
runSequence= require( 'run-sequence' ),
sass = require( 'gulp-sass' ),
uglify = require( 'gulp-uglify' ),
concat = require( 'gulp-concat' ),
sourcemaps = require( 'gulp-sourcemaps' ),
watch = require('gulp-watch'),
clean = require('gulp-clean'),
server = require( 'gulp-develop-server' );

gulp.task( 'default', [ 'watch', 'server:start', 'build' ]);

gulp.task( 'clean', function() {
	return gulp.src( './dist', {read: false} )
		.pipe( clean( { force: true } ) );
});

gulp.task( 'build', function(cb) {
	runSequence('clean', [ 'sass', 'move', 'uglify', 'concat-libs' ], cb );
});

gulp.task( 'sass', function() {
	return gulp.src( './src/common/sass/main.sass' )
		.pipe( sass() )
		.pipe( gulp.dest( './dist/css' ) );
});

var projectFiles = [
	'./src/common/js/**/*.js',
	'./src/modules/**/*.js'
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
	'./src/libs/jquery/js/jquery.js',
	'./src/libs/foundation/js/fastclick.js',
	'./src/libs/foundation/js/foundation.min.js',
	'./src/libs/angular/js/angular.min.js',
	'./src/libs/angular/js/angular-route.min.js',
	'./src/libs/angular/js/angular-ui-router.min.js',
	'./src/libs/angular/js/angular-resource.min.js',
	'./src/libs/angular/js/angular-sanitize.min.js'
];

gulp.task( 'concat-libs', function() {
	return gulp.src( libraryFiles )
	.pipe( concat( 'libraries.js' ) )
	.pipe( gulp.dest( './dist/js' ));
});

var directories = [
	'./src/data/*.json',
	'./src/modules/**/views/*.html',
	'./src/index.html',
	'./src/libs/foundation/js/modernizr.js',
	'./src/libs/foundation/css/foundation.min.css',
	'./src/common/js/directives/**/*.html',
	'./src/common/img/*'
]

gulp.task( 'move', function() {
	gulp.src( directories, { base: './src' })
		.pipe( gulp.dest( './dist/' ));
});    
 
// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: './server.js' } );
});
 
// restart server if server.js changed 
gulp.task( 'server:restart', function() {
    gulp.watch( [ './server.js' ], server.restart );
});

gulp.task( 'watch', function() {
	gulp.watch( [ './src/**/**' ], [ 'build' ] );
})