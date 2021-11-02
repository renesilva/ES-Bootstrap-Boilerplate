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
const sourceFileSass = './src/assets/scss/stylesheet.scss';
const cssStyleWatchFiles = './src/assets/scss/**/*.scss';

// CSS
const css = function() {
  return gulp.src(sourceFileSass)    
    .pipe(changed(cssStyleWatchFiles))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream());
};

// JS
const js = function() {
  return gulp.src(javascriptWatchFiles)
    .pipe(changed(javascriptWatchFiles))
    .pipe(concat('bundle.js'))
    // .pipe(uglify({ toplevel: true, 'mangle': { reserved: ['jQuery'] } }))
    .pipe(rename({
      extname: '.min.js',
    }))
    .pipe(gulp.dest('./src/js/'))
    .pipe(browserSync.stream());
};

// watch gulp
const watchGulp = function() {
  gulp.watch(htmlWatchFiles).on('change', browserSync.reload);
  gulp.watch(cssStyleWatchFiles, css);
  gulp.watch(javascriptWatchFiles, js);
};
exports.watchGulp = watchGulp;


// Subir al servidor
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
  });
});

gulp.task('build',  gulp.parallel(css, js,));
gulp.task('default', gulp.parallel(css, js, 'browser-sync', watchGulp));