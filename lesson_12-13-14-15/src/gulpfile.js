const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const serveScss = require('gulp-sass');

// Static server
 function bs() {
   serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./css/*.scss").on('change', browserSync.reload);
  watch("./js/*.js").on('change', browserSync.reload);
};


function minifycss(done) {
  gulp.src('css/main.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css/'));
    done();
};


function serveSass() {
  return src("../css/*.scss")
    .pipe(serveScss())
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
};


exports.serve = bs;