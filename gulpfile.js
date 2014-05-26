var gulp = require('gulp'),
  sass   = require('gulp-ruby-sass'),
  cssmin = require('gulp-cssmin'),
  prefix = require('gulp-autoprefixer'),
  server = require('gulp-connect');

gulp.task('styles', function() {
	return gulp.src('sass/main.scss')
	  .pipe(sass())
	  .pipe(prefix())
	  .pipe(cssmin())
	  .pipe(gulp.dest('styles'));
});

gulp.task('server', function(){
	server.server();
});

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.scss'], ['styles']);
});

gulp.task('default', ['styles', 'server', 'watch']);
