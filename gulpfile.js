const { series } = require('gulp');
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    sas = require('gulp-sass'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('html',async function(){

      return gulp.src('project/*.*')
              .pipe(sourcemaps.init())
              .pipe(pug({pretty:true}))
              .pipe(sourcemaps.write('.'))
              .pipe(gulp.dest('dist'))
              .pipe(livereload());

})
gulp.task("css",async function(){

       return gulp.src('project/css/*.*')
              .pipe(sourcemaps.init())
              .pipe(prefix('last 4 version'))
              .pipe(sas())
              .pipe(concat('main.css'))
              .pipe(sourcemaps.write('.'))
              .pipe(gulp.dest('dist/css'))
              .pipe(livereload());

})
gulp.task("js",async function(){

       return gulp.src('project/js/*.*')
              .pipe(sourcemaps.init())
              .pipe(concat('main.js'))
              .pipe(sourcemaps.write('.'))
              .pipe(gulp.dest('dist/js'))
              .pipe(livereload());

})
gulp.task('watch',function(){

       require('./server.js');
       livereload.listen();
       gulp.watch('project/index.pug',series('html'))
       gulp.watch('project/css/**/*.scss',series('css'))
       gulp.watch('project/js/*.js',series('js'))
      
      
      })