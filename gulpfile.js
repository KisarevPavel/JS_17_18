var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglifyjs'),
    csso     = require('gulp-csso');

gulp.task('buildcss',function(){
	return gulp.src([
	'app/css/style1.css',
	'app/css/style2.css'
	])
	.pipe(concat('all_css_min.css'))
	.pipe(csso())
	.pipe(gulp.dest('dist/css'));
})

gulp.task('buildjs',function(){
	return gulp.src([
	'app/js/script1.js',
	'app/js/script2.js'
	])
	.pipe(concat('all_js_min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
})

gulp.task('buildProject', ['buildcss','buildjs'], function(){})
