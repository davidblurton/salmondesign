module.exports = function(gulp) {
  var notify = require("gulp-notify");
  var bower = require('bower');
  var bowerFiles = require('main-bower-files');
  var filter = require('gulp-filter');
  var rename = require('gulp-rename');

  gulp.task('bower', function() {
    return bower.commands.install()
      .on('error', notify.onError(function(err) {
        return err.data.endpoint.name + ' » ' + err.details;
      }))
      .on('end', function() {
        var jsFilter = filter(['**/*.js', '**/*.map']),
          lessFilter = filter('**/*.less');

        return gulp.src(bowerFiles())
          .pipe(rename({dirname: ''}))
          .pipe(jsFilter)
          .pipe(gulp.dest(gulp.config.source + '/js/vendor/'))
          .pipe(jsFilter.restore())
          .pipe(lessFilter)
          .pipe(gulp.dest(gulp.config.source + '/styles/vendor/'));
      });
  });
};
