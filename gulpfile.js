const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function buildJs() {
    return gulp.src('./src/*.js') // папка где лежат все js файлы
    .pipe(sourcemaps.init())
    .pipe(concat('app.js')) // это как будет называться собраный файл
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/')); // папка куда будет складывать наш файл
}

gulp.watch('./src/*.js', buildJs);

exports.default = buildJs;