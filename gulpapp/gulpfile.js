const gulp = require('gulp');

/*
-- Top Level Function --
gulp.task - Define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');

});


// Copy All Html files
gulp.task('copyHtml', function(){
  gulp.src('src/* .html')
  .pipe(gulp.dest('dist'));

});

gulp.task('default', function(){
  return console.log('Gulp is running...');

});
