/* Vars */
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cssmin = require('gulp-cssmin'),
    jsmin = require('gulp-jsmin'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

/* Sources */
var src_js = 'sources/js/**/*.js',
    src_css = 'sources/css/**/*.css';

/* Destination folder */
var DEST = 'build/';


/* Html */
var src_html = 'index.html';
var browsers_ver = ['not ie <= 10', 'iOS > 7'];


/* Tasks */
gulp.task('default', ['build', 'watch']);


gulp.task('build', [
    'buildJs',
    'buildCss',
    'buildDep'
]);


// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen(); //default web-server

    gulp.watch(src_js, ['reloadJs']);
    gulp.watch(src_css, ['reloadCss']);
    gulp.watch(src_html, ['reloadHtml']);
});

/* -------------------- Dependencies */
//Reload
gulp.task('buildDep', function () {
    gulp.src('node_modules/downloadjs/download.min.js')
        .pipe(gulp.dest(DEST + 'js'))
        .pipe(livereload());
});

/* -------------------- Html */
//Reload
gulp.task('reloadHtml', function () {
    gulp.src(src_html)
        .pipe(livereload());
});

/* -------------------- JS */
//Reload
gulp.task('reloadJs', function () {
    gulp.src(src_js)
        .pipe(concat("js.min.js"))
        .pipe(gulp.dest(DEST + 'js'))
        .pipe(livereload());
});

//Build
gulp.task('buildJs', function () {
    gulp.src(src_js)
        .pipe(jsmin())
        .pipe(concat("js.min.js"))
        .pipe(gulp.dest(DEST + 'js'))
        .pipe(livereload());
});


/* -------------------- CSS */
//Reload
gulp.task('reloadCss', function () {
    gulp.src(src_css)
        .pipe(autoprefixer({
            browsers: browsers_ver,
            cascade: false
        }))
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest(DEST + 'css'))
        .pipe(livereload());
});

//Build
gulp.task('buildCss', function () {
    gulp.src(src_css)
        .pipe(autoprefixer({
            browsers: browsers_ver,
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest(DEST + 'css'))
        .pipe(livereload());
});