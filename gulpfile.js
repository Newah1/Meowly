const {src, dest, watch} = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const tsify = require('tsify');


function watch_ts(){
    return watch(['ts/**/*.ts'], function () {
        return compile_ts();
    });
}


function compile_ts() {
    try {
        return browserify({
            debug: true,
            cache: true
        })
            .add(require.resolve('babel-polyfill'))
            .add('ts/main.ts')
            .plugin(tsify, {target: 'es6', esModuleInterop: true, allowSyntheticDefaultImports: true})
            .transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts'],

            })
            .bundle()
            .pipe(source('index.js'))
            .pipe(dest('js'));
    }catch(err){
        console.error(err);
    }
}

exports.watch_ts = watch_ts;
exports.compile_ts = compile_ts;