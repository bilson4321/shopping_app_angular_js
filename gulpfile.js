const gulp = require('gulp');
const concat=require('gulp-concat');
const browserSync=require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const nodemon=require('gulp-nodemon');

gulp.task('start',()=>{
  gulp.parallel('server','watch')();
});

gulp.task('server',()=>{
  return nodemon({
        script:'./server/index.js',
        watch:'./server/'
  })
});

gulp.task('js', () => {
  return gulp.src('./src/scripts/main.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./build/js'));
});

gulp.task('style',()=>{
  return gulp.src('./src/styles/*.css')
          .pipe(concat("style.css"))
          .pipe(gulp.dest("build/styles/"))
})

gulp.task('view',()=>{
    return gulp.src("src/index.html")
         .pipe(gulp.dest("build/"));
});

gulp.task('images',()=>{
    return gulp.src("src/images/*.*")
         .pipe(gulp.dest("build/images/"));
});

gulp.task('watch',function(){
  gulp.watch(
    ["src/scripts/main.js","src/scripts/**/*.js"],
    gulp.series("js")
  );
  gulp.watch(
    ["src/styles/*.css"],
    gulp.series("style")
  );
  gulp.watch(
    ["src/index.html"],
    gulp.series("view")
  );
  gulp.watch(
    ["src/images/*.*"],
    gulp.series("images")
  );
})
//not working
//gulp.task('compile',gulp.series('js','view'))
// gulp.task('compile',async function(){
// gulp.series('view','js')
// });
// gulp.task('compile', done => {
//     gulp.series('view','js')
//     done();
// });
