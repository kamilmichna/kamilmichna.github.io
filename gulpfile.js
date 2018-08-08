const gulp = require('gulp')
const sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/styles'));
});
gulp.task('move', function () {
    return gulp.src('./src/*')
        .pipe(gulp.dest('./docs'));
});
gulp.task('moveJS', function () {
    return gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('./docs/scripts'));
});
gulp.task('moveImgs', function () {
    return gulp.src('./src/imgs/*')
        .pipe(gulp.dest('./docs/imgs'));
});

gulp.task('default', function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/*', gulp.parallel('move','moveImgs'));
    gulp.watch('./src/scripts/*.js', gulp.parallel('moveJS'))
});