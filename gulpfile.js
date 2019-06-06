var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');



gulp.task('nunjucks', function () {
    return gulp.src('templates/*.nunjucks')
        .pipe(nunjucksRender({
            path: ['templates/'] // String or Array
        }))
        .pipe(gulp.dest('.'));
});