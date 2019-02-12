var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('default', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      defaultFile: 'main.html',
      directoryListing: false,
      open: false
    }));
});