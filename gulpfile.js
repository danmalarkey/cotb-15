var gulp = require('gulp'), // required node package
    uglify = require('gulp-uglify'), // requiring gulp uglify
    sass = require('gulp-ruby-sass');


 // Scripts Task
 // Uglifies
 gulp.task('scripts', function() {
     gulp.src('src/js/**/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('dist/js/minjs'));
 });



gulp.task('styles', function() {
    return sass('src/scss', {
      style: 'compact'
    })
    .pipe(gulp.dest('src/css'))
    .pipe(gulp.dest('dist/css'));
});


var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server();
});



// Watch Task
// watches js
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'styles', 'watch', 'webserver']);

