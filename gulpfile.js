var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

/** HTML - when the html file is edited, we can update the browser **/
gulp.task('html', function(){
  gulp.src('app/**/*.html');
});

/** SASS - Translates SASS files into CSS files **/
gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

/** BrowserSync - Enables working in browser + devices **/
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: "./app/"
    }
  });
});

/** Watch for any changes in files **/
gulp.task('watch', function(){
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/scss/*.scss', ['sass']);
});

/* Default task */
gulp.task('default', ['html', 'sass', 'browser-sync', 'watch']);
