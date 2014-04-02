'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('griddler-min', function() {
  return gulp.src('src/griddler.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['griddler-min']);
