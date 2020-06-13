var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: '1qdmjMTbfJ6YRrJBNhLbhFbQmvGHx2yx'
        }))
        .pipe(gulp.dest('images'));
        done();
});