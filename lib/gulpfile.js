"use strict";

var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', ['watch', 'lint', 'sassify']); //add test?


gulp.task('watch', function() {
  gulp.watch(['../app/**/*.js'], ['lint']);
  gulp.watch('../sass/**/*.scss', ['sassify']);
});

gulp.task('lint', function() {
  return gulp.src('../app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sassify', function () {
  return gulp.src('../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../styles'));
});

