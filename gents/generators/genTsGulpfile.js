
const tsGulfileContent = `
import {src, dest, parallel} from 'gulp';
import cleanCss from 'gulp-clean-css';
import replace from 'gulp-replace';
import concat from 'gulp-concat'
import ts from 'gulp-typescript';
import uglify from 'gulp-uglify';

import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();
 
function genHTML(cb) {
    src('src/**/*.html')
    .pipe(dest('public'))
    cb();
}


function streamTs(cb) {
  src('src/**/*.ts')
    .pipe(ts())
    .pipe(uglify())
    .pipe(dest('public'));
  cb();
}

function minifyCSS(cb) {
  src([
    'src/**/*.css', 
    'node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(cleanCss())
    .pipe(dest('public'));
  cb();
}

function build(cb) {
  parallel(genHTML, streamTs, minifyCSS)(cb);
}

export default build

`;

module.exports = tsGulfileContent;
