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
const vendorJavascriptFiles = './vendor/js/*.js';
const mapsVendorJavascriptFiles = './vendor/js/*.js.map';
const sourceFileSass = './src/assets/scss/stylesheet.scss';
const cssStyleWatchFiles = './src/assets/scss/**/*.scss';

// CSS
const css = function() {
  return gulp.src(sourceFileSass)    
    .pipe(changed(cssStyleWatchFiles))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/static/css/'))
    .pipe(browserSync.stream());
};

// Vendor JS
const vendorJS = function() {
  return gulp.src(vendorJavascriptFiles)
    .pipe(changed(vendorJavascriptFiles))
    .pipe(concat('vendors.js'))
    .pipe(rename({
      extname: '.min.js',
    }))
    .pipe(gulp.dest('./src/static/js/'))
    .pipe(browserSync.stream());
};

// Maps Vendor JS
const mapsVendorJS = function() {
  return gulp.src(mapsVendorJavascriptFiles)
    .pipe(changed(mapsVendorJavascriptFiles))
    .pipe(gulp.dest('./src/static/js/'))
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
    .pipe(gulp.dest('./src/static/js/'))
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

gulp.task('build',  gulp.parallel(css, js, vendorJS, mapsVendorJS));
gulp.task('default', gulp.parallel(css, js, vendorJS, mapsVendorJS, 'browser-sync', watchGulp));