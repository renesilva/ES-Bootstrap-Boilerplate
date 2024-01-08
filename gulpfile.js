// Base de GULP
const gulp = require('gulp');

// Extensiones de GULP
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
// const uglify = require('gulp-uglify');

// watch files html
const htmlWatchFiles = './src/*.html';
// watch files js
const javascriptWatchFiles = './src/assets/js/*.js';
// watch files css
const sourceFileSass = './src/assets/scss/stylesheet.scss';
const cssStyleWatchFiles = './src/assets/scss/**/*.scss';
const bootstrapIconsFontFiles = './node_modules/bootstrap-icons/font/fonts/**/*';

// CSS
const css = () => gulp.src(sourceFileSass)
  .pipe(changed(cssStyleWatchFiles))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./src/static/css/'))
  .pipe(browserSync.stream());

// Bootstrap JS
// Bootstrap Bundle JS
const bootstrapJS = () => gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.js')
  .pipe(concat('bootstrap.bundle.js'))
  .pipe(gulp.dest('./src/static/js/'))
  .pipe(browserSync.stream());
// Bootstrap Bundle Maps JS
const bootstrapMapJS = () => gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.js.map')
  .pipe(gulp.dest('./src/static/js/'))
  .pipe(browserSync.stream());

// Axios JS
const axiosJS = () => gulp.src('./node_modules/axios/dist/axios.js')
  .pipe(concat('axios.js'))
  .pipe(gulp.dest('./src/static/js/'))
  .pipe(browserSync.stream());
// Bootstrap Bundle Maps JS
const axiosMapJS = () => gulp.src('./node_modules/axios/dist/axios.js.map')
  .pipe(gulp.dest('./src/static/js/'))
  .pipe(browserSync.stream());

// Bootstrap Fonts
const bootstrapIconFonts = () => gulp.src(bootstrapIconsFontFiles)
  .pipe(changed(bootstrapIconsFontFiles))
  .pipe(gulp.dest('./src/static/css/fonts/'))
  .pipe(browserSync.stream());

//JS
const js = () => gulp.src(javascriptWatchFiles)
  .pipe(changed(javascriptWatchFiles))
  .pipe(browserSync.stream());

// watch gulp
const watchGulp = () => {
  gulp.watch(htmlWatchFiles).on('change', browserSync.reload);
  gulp.watch(cssStyleWatchFiles, css);
  gulp.watch(javascriptWatchFiles, js);
};

exports.watchGulp = watchGulp;

// Subir al servidor
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
  });
});

gulp.task('build',  gulp.parallel(css, js, bootstrapJS, bootstrapMapJS, axiosJS, axiosMapJS, bootstrapIconFonts));
gulp.task('default', gulp.parallel(css, js, bootstrapJS, bootstrapMapJS, axiosJS, axiosMapJS, bootstrapIconFonts, 'browser-sync', watchGulp));
