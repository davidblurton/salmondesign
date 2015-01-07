var runSequence = require('run-sequence');

module.exports = function(gulp) {
  gulp.task('build', ['clean'], function(cb) {
    runSequence('copy', 'images', 'browserify', 'less', 'jade', cb);
  });
};
