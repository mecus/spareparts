var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var gulpSequence = require('gulp-sequence');
var nodemon = require('gulp-nodemon');
var path = require('path');

var tsconfigProject = ts.createProject('tsconfig.json');

const linterReportOptions = {
    emitError: false,
    reportLimit: 0,
    summarizeFailureOutput: false,
    allowWarnings: true
};

gulp.task('ts-build', function(){
    return tsconfigProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsconfigProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.join(__dirname, 'dist')));
});

gulp.task('linter', function(){
    gulp.src(path.join(__dirname, 'src/**/*.ts'))
    .pipe(tslint({
        formatter: 'stylish'
    }))
    .pipe(tslint.report(linterReportOptions));
})

gulp.task('ts-watch', function(){
   gulp.watch('src/**/*.ts', ['linter', 'ts-build']);
})

gulp.task('serve-dev', function () {
    var src = './dist/**/*.js';
    var stream = nodemon(
        {   script: './dist/server.js',
            ext: 'js',
            watch: [src],
            stdout:   true,
            readable: true,
            env: {'NODE_ENV': 3000}
        })
   
    stream
        .on('restart', function () {
        //   console.log('restarted!')
        })
        .on('crash', function() {
          console.error('Application has crashed!\n')
           stream.emit('restart', 10)  // restart the server in 10 seconds
        })
  })

gulp.task('default', gulpSequence('linter', 'ts-build', ['ts-watch', 'serve-dev']));