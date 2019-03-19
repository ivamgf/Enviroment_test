//Configuration Gulpfile

//Variables
var gulp = require('gulp');
var html = require('gulp-htmlmin');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
//var runSequence = require('run-sequence');
var rename = require("gulp-rename");
var gulps = require("gulp-series");


//Constants
const { series } = require('gulp');
const terser = require('gulp-terser');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

//task default
gulp.task('default', function() {
  //gulp.watch
  return gulp.watch("*.html").on("change", reload)
  .pipe(gulp.watch("*.js").on("change", reload))
  .pipe(gulp.watch("*.css").on("change", reload));
});
//task default

//task min html
gulp.task('minify-html', function() {
  return gulp.src('./index.html')
    .pipe(html({
      collapseWhitespace:true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest('./dist/'));
    
});
//task min html

//task min css
gulp.task('minify-css', function() {
  return gulp.src('./style.css')
    .pipe(minifycss({
	  compatibility: 'ie8'
  }))
  .pipe(gulp.dest('./dist/'));
});
//task min css

//task min js
gulp.task('minify-js', function() {
  return gulp.src('./*.js')
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(terser())
    .pipe(gulp.dest('./dist/'));
});
//task min js

//Build
// gulp.task('build', function(cb) {
//  runSequence('minify-html', 'minify-css', 'minify-js', cb)
// });
//Build

//task serve
gulp.task('serve', function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  //Update components html
  //gulp.watch("src/contact/contact_component.html").on("change", browserSync.reload);  

  //Update components js
  //gulp.watch("src/contact/contact_component.js").on("change", browserSync.reload);
  
  //Update components css
  //gulp.watch("src/contact/contact_component.css").on("change", browserSync.reload);
  
  //Update js
  //gulp.watch("services/*.js").on("change", browserSync.reload);
  //gulp.watch("guardians/*.js").on("change", browserSync.reload);
  //gulp.watch("modules/*.js").on("change", browserSync.reload);
  //gulp.watch("controllers/*.js").on("change", browserSync.reload);

  //Update components in root
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("*.js").on("change", reload);
  gulp.watch("*.css").on("change", reload);
});
//task serve

//exports.default = defaultTask
exports.build = series('minify-html', 'minify-css', 'minify-js');