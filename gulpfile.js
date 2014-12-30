'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

gulp.task('griddler-dev', function() {
  return gulp.src('src/griddler.scss')
    .pipe(sass({ style: 'compact', sourcemap: true }))
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .pipe(gulp.dest('dist'));
});

gulp.task('griddler-min', function() {
  return gulp.src('src/griddler.scss')
    .pipe(sass({ style: 'compact', sourcemap: false }))
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['griddler-min']);
