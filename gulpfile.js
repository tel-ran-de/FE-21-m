const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const notify = require('gulp-notify')

function build() {
    return src('./src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', notify.onError())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('assets/css'))
}

exports.build = build;
exports.watch = function () {
    return watch('./src/scss/**/*.scss', series('build'));
};