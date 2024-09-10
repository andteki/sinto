
const tsGulfileContent = `
import {src, dest, series} from 'gulp';
import cleanCss from 'gulp-clean-css';
import replace from 'gulp-replace';
import concat from 'gulp-concat'
import ts from 'gulp-typescript';
import uglify from 'gulp-uglify';
import minify from 'gulp-minify';

import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();
 
function genHTML(cb) {
    src('app/**/*.html')
    .pipe(dest('dist'))
    cb();
}


function streamTs(cb) {
  src('src/**/*.ts')
    .pipe(ts())
    .pipe(uglify())
    .pipe(dest('public'));
  cb();
}

function minifyJS(cb) {
  src([
    'public/**/*.js', 
    'node_modules/bootstrap/dist/js/bootstrap.js'
  ])
    .pipe(replace(/import .*/g, ''))
    .pipe(replace(/export .*/g, ''))
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(dest('dist'));
  cb();
}

function minifyCSS(cb) {
  src([
    'app/**/*.css', 
    'node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(cleanCss())
    .pipe(dest('dist'));
  cb();
}

function copyImages(cb) {
  src('app/assets/**/*')
    .pipe(dest('dist/assets'));
  cb();
}

function build(cb) {
  series(genHTML, streamTs, minifyJS, minifyCSS, copyImages)(cb);
}

export default build

`;

module.exports = tsGulfileContent;
