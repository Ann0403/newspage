var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require ('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    iconfont    =   require( 'gulp-iconfont' ),
    iconfontCss =   require( 'gulp-iconfont-css' );


//styles (compressed, autoprefixer)
gulp.task('style', function () {
    return gulp.src('src/styles/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('watch', function () {
    gulp.watch(['src/styles/**/*.scss'], ['default']);
});

gulp.task('default', ['style']);



// icon fonts
var fontName = 'icons';

// add svg icons to the folder "icons" and use 'iconfont' task for generating icon font
// gulp.task( 'iconfont', async () => {
//     gulp.src( 'src/assets/icons/*.svg' )
//         .pipe( iconfontCss( {
//             // где будет наш scss файл
//             targetPath   : '../../styles/_icons.scss',
//             // пути подлючения шрифтов в _icons.scss
//             fontPath     : 'src/assets/fonts/',
//             fontName    : fontName

//         } ) )
//         .pipe( iconfont( {
//             fontName    : fontName,
//             formats     : [ 'svg', 'ttf', 'eot', 'woff', 'woff2' ],
//             normalize   : true,
//             fontHeight  : 1001
//         } ) )
//         .pipe( gulp.dest( 'src/assets/fonts' ) )
//   });