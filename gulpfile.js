const gulp = require('gulp');
const minify = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const webserver = require('gulp-webserver');
const html = require('gulp-htmlmin');
const concat = require('gulp-concat');

//创建
gulp.task('minify',function(){
	//查询
	gulp.src('./Content/css/*.css')
		//压缩
		.pipe(minify())
		//输出
		.pipe(gulp.dest('public'))
})
gulp.task('uglify',function(){
	gulp.src('./Content/js/*.js')
		.pipe(concat(date_format.min.js))
		.pipe(uglify())
		.pipe(gulp.dest('public'))
})
gulp.task('libHtml',function(){
	gulp.src('./index.html')
		.pipe(html{
			recomments:true,
			reScriptsTypeApplication:true,
			reStyleLinkTypeApplication:true,
			minifyJS:true,
			minifyCSS:true
		})
		.pipe(gulp.dest('public'))
})
gulp.task('webserver',function(){
	gulp.src('./',function(){
		.pipe(webserver({
			host:'localhost',
			port:8080,
			livereload:true,
			open:true,
			fallback:'index.html'
		}))
		.pipe(gulp.dest('public'))
	})
})
gulp.task('default',['minify','uglify','libHtml','webserver']);
