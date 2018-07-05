const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait')

gulp.task('sass', ()=> {
  return gulp.src('.\\src\\sass\\**\\*.sass')
            .pipe(wait(500))
            .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
            .pipe(gulp.dest('.\\src\\css'));
});

gulp.task('sass:watch', ()=> {
  gulp.watch('.\\src\\sass\\**\\*.sass', ['sass']);
})

gulp.task('default', ['sass:watch']);