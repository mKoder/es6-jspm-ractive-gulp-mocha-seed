var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    jspm = require('jspm'),
    jshint = require('gulp-jshint'),
    karma = require('karma').server;

gulp.task('watch', function() {

    var browserSync = require('browser-sync');

    browserSync({
        online: true,
        server: {
            baseDir: ['.']
        }
    });

    gulp.watch(['app/**/*.*','tests/**/*.js'], function() {
        gulp.run('lint', 'test');
        browserSync.reload();
    });

});

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: false,
        port: 9003
    });
});

gulp.task('jspm', function() {
    return jspm.bundleSFX('app/main', 'dist/build.js', { sourceMaps: true });
});

gulp.task('lint', function() {
    return gulp
        .src(['gulpfile.js', 'app/**/*.js', 'test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function(done) {

    return karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);

});

gulp.task('build', ['lint','jspm','test']);
gulp.task('default', ['lint','test','watch', 'connect']);
