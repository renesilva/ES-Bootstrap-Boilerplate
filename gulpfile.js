// Base de GULP
const gulp = require('gulp');

// Extensiones de GULP
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
// const uglify = require('gulp-uglify');

// watch files
const htmlWatchFiles = './src/*.html';
const javascriptWatchFiles = './src/assets/js/*.js';
const vueWatchFiles = './src/**/*.vue';
const sourceFileSass = './src/assets/scss/stylesheet.scss';
const sassStyleWatchFiles = './src/assets/scss/**/*.scss';
const vendorFontsFiles = './vendor/fonts/**/*';

// SASS
const sassFiles = function () {
  return gulp
    .src(sourceFileSass)
    .pipe(changed(sassStyleWatchFiles))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/static/css/'))
    .pipe(browserSync.stream());
};

// Vendor Fonts
const vendorFonts = function () {
  return gulp
    .src(vendorFontsFiles)
    .pipe(changed(vendorFontsFiles))
    .pipe(gulp.dest('./src/static/fonts/'))
    .pipe(browserSync.stream());
};

// watch gulp
const watchGulp = function () {
  gulp.watch(htmlWatchFiles).on('change', browserSync.reload);
  gulp.watch(sassStyleWatchFiles, sassFiles);
  gulp.watch(javascriptWatchFiles).on('change', browserSync.reload);
  gulp.watch(vueWatchFiles).on('change', browserSync.reload);
};
exports.watchGulp = watchGulp;

// Subir al servidor
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
  });
});

gulp.task('build', gulp.parallel(sassFiles, vendorFonts));
gulp.task(
  'default',
  gulp.parallel(
    sassFiles,
    vendorFonts,
    'browser-sync',
    watchGulp,
  ),
);
