const {src, dest, watch} = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const tsify = require('tsify');
const uglify = require('uglify-js');
const watchify = require('watchify');



function watch_ts(){
    return watch(['ts/**/*.ts'], function () {
        return compile_ts();
    });
}

let b_instance = browserify({
    debug: true,
    cache: true,
    entries: [require.resolve('babel-polyfill'), 'ts/main.ts'],
    plugin: [watchify, tsify]
});

function compile_ts2() {
    return b_instance.on('update', ev => {
        return b_instance.bundle()
            .pipe(source('index.js'))
            .pipe(dest('js'));
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
            .plugin(tsify, {target: 'es6', esModuleInterop: true, allowSyntheticDefaultImports: true, resolveJsonModule: true})
            .transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts'],

            })
            // .transform('uglifyify', { global: true })
            .bundle()
            .pipe(source('index.js'))
            .pipe(dest('js'));
    }catch(err){
        console.error(err);
    }
}

exports.watch_ts = watch_ts;
exports.compile_ts = compile_ts;
exports.compile_ts2 = compile_ts2;