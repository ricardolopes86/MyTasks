var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src([
            './public/stylesheets/*.css',
            './public/javascripts/*.js',
            './public/stylesheets/fonts/*.*'
        ],
            {read: false}
    );

    var injectOptions = {
        ignorePath: "/public"
    };
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: "../public"
    };
    return gulp.src('./views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./views/'));
});

gulp.task('serve', ['inject'], function () {
   var options = {
       script: 'app.js',
       delayTime: 1,
       env: {
           'PORT' : 8000
       },
       watch: '*.*'
   };

   return nodemon(options).on('restart', function (ev) {
       console.log('Restarting ');
   });
});