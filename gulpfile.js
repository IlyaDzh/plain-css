const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('cssmin', function (done) {
    gulp.src('./src/*.css')
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('csspref', function (done) {
    gulp.src('./src/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('watch', function () {
    gulp.watch('./src/*.css', gulp.parallel('cssmin', 'csspref'));
});