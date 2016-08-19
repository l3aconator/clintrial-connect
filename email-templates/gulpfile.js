var gulp = require('gulp');
var mjml = require('gulp-mjml')

gulp.task('build', function () {
  gulp.src('./base-template/base-template.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./base-template/'))

  gulp.src('./template-1a/template-1a.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-1a/'))

  gulp.src('./template-1b/template-1b.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-1b/'))

  gulp.src('./template-1c/template-1c.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-1c/'))

  gulp.src('./template-1d/template-1d.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-1d/'))

  gulp.src('./template-2a/template-2a.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-2a/'))

  gulp.src('./template-2b/template-2b.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-2b/'))

  gulp.src('./template-3b/template-3b.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-3b/'))

  gulp.src('./template-3c/template-3c.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-3c/'))

  gulp.src('./template-4a/template-4a.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-4a/'))

  gulp.src('./template-4b/template-4b.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-4b/'))

  gulp.src('./template-5a/template-5a.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./template-5a/'))
});
