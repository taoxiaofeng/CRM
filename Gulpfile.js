var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var vinylPaths = require('vinyl-paths');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var del = require('del');
var path = require('path');
var templateCache = require('gulp-angular-templatecache');
var through = require('through');
var proxy = require("anyproxy");
var reduce = require('gulp-reduce-file');

var WEB_PORT = 5000;
var APP_DIR = 'app';
var DIST_DIR = 'dist';
var REV_DIR = 'rev';

function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}

function fileBundle(folder) {
  return gulp.src([APP_DIR + '/js/' + folder + '/*.js'])
    .pipe(reduce(folder + 's.js', function(file, memo) {
      var relPath = path.relative(APP_DIR + '/js/', file.path);
      if (!memo.hasOwnProperty('paths')) {
        memo['paths'] = [];
      }
      memo['paths'].push(relPath);
      return memo;
    }, function(memo) {
      $.util.log($.util.colors.magenta('Rebuild ' + folder.slice(0, 1).toUpperCase() + folder.slice(1) + 's'));
      var pathArray = memo['paths'];
      var str = 'module.exports=[';
      for (var i = 0, len = pathArray.length; i < len; i++) {
        pathArray[i] = 'require("./' + pathArray[i].split('\\').join('/') + '")';
        $.util.log($.util.colors.magenta(pathArray[i]));
      }
      str += pathArray.join(',') + ']';
      return str;
    }, {}))
    .pipe(gulp.dest(APP_DIR + '/js/'));
}

gulp.task('clean', function() {
    return gulp.src([DIST_DIR, REV_DIR], {
            read: false
        })
        .pipe($.clean());
});
//html
gulp.task('html-min', function() {
    return gulp.src([APP_DIR + '/**/*.html', '!app/demo.html'])
        .pipe($.minifyHtml())
        .pipe(gulp.dest('rev'));
});
gulp.task('html-min-debug', function() {
    return gulp.src(APP_DIR + '/**/*.html')
        .pipe($.minifyHtml())
        .pipe(gulp.dest(DIST_DIR));
});

//scss
gulp.task('scss-compile-debug', function() {
    return gulp.src(APP_DIR + '/scss/index.scss')
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('scss-compile', function() {
    return gulp.src(APP_DIR + '/scss/index.scss')
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe(gulp.dest('rev/css'));
});
/*//css
gulp.task('css-concat-debug', function() {
    return gulp.src('./dist/css/*.css')
        .pipe(vinylPaths(del))
        .pipe($.concat('index.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css-concat', function() {
    return gulp.src('./rev/css/*.css')
        .pipe(vinylPaths(del))
        .pipe($.concat('index.css'))
        .pipe(gulp.dest('rev/css'));
});*/
//font
gulp.task('font-debug', function() {
    return gulp.src(APP_DIR + '/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});
gulp.task('font', function() {
    return gulp.src(APP_DIR + '/fonts/*')
        .pipe(gulp.dest('rev/fonts'));
});
//image
gulp.task('image-debug', function() {
    return gulp.src(APP_DIR + '/img/**/*')
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('image', function() {
    return gulp.src(APP_DIR + '/img/*')
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('rev/img'));
});
//模块化转换
gulp.task('browserify-debug', function() {
    return browserify({
            noParse: ['zepto', 'react'], //忽略
            entries: [APP_DIR + '/js/index.js'], //入口文件
            debug: true
        }).ignore('zepto').ignore('react')
        .bundle()
        .on('error', errorHandler)
        .pipe(source('index.js')) //将流写入文件index.js
        .pipe(gulp.dest(DIST_DIR + '/js/')); //目标目录
});
gulp.task('browserify', function() {
    return browserify({
            entries: [APP_DIR + '/js/index.js']
        }).ignore('zepto')
        .bundle()
        .on('error', errorHandler)
        .pipe(source('index.js'))
        .pipe(gulp.dest(REV_DIR + '/js'));
});

//lib
gulp.task('lib-debug', function() {
    return browserify({
            entries: [APP_DIR + '/js/lib.js'],
            debug: true
        })
        .bundle().on('error', errorHandler)
        .pipe(source('lib.js'))
        .pipe(gulp.dest(DIST_DIR + '/js/'));
});
gulp.task('lib', function() {
    return browserify({
            entries: [APP_DIR + '/js/lib.js']
        })
        .bundle().on('error', errorHandler)
        .pipe(source('lib.js'))
        .pipe(gulp.dest(REV_DIR + '/js/'));
});



//reload
gulp.task('reload', function() {
    return gulp.src([DIST_DIR]).pipe($.connect.reload());
});

//watch
gulp.task('watch-html', function(cb) {
    $.sequence('html-min-debug', 'angularTemplateCache-debug', 'reload')(cb);
});
gulp.task('watch-assets', function(cb) {
    gulp.src(['dist/css'], {
            read: false
        })
        .pipe($.clean());
    $.sequence(
        'browserify-debug',
        'scss-compile-debug',
        //'lib-debug',
        'scss-compile-debug',
        //'css-concat-debug',
        'copy-cfg-debug',
        'reload'
    )(cb);
});
gulp.task('watch-img', function(cb) {
    gulp.src(['dist/img'], {
            read: false
        })
        .pipe($.clean());
    $.sequence('image-debug', 'reload')(cb);
});
gulp.task('sourceMap', function() {
    var controllers = [];
    var services = [];
    var directives = [];
    var filters=[];
    fileBundle('controller');
    fileBundle('service');
    fileBundle('directive');
    fileBundle('filter');
});
gulp.task('watch', function() {
    gulp.watch(APP_DIR + '/**/*.html', ['watch-html']);
    gulp.watch([APP_DIR + '/**/*.js', APP_DIR + '/**/*.jsx', APP_DIR + '/**/*.css', APP_DIR + '/**/*.scss'], ['watch-assets']);
    gulp.watch([APP_DIR + '/img/*.*'], ['watch-img']);
    gulp.watch([APP_DIR + '/scss/*.scss', APP_DIR + '/js/*.js']);
    gulp.watch([APP_DIR + '/js/controller/*.js', APP_DIR + '/js/service/*.js', APP_DIR + '/js/directive/*.js',APP_DIR + '/js/filter/*.js'])
        .on('change', function(event) {
            var temp = event.path.split('/');
            var folder = temp[temp.length - 2];
            //增删事件触发
            if (event.type === 'deleted' || event.type === 'added') {
                fileBundle(folder);
            }
        });
});


//server
gulp.task('http-server-debug', function() {
    $.connect.server({
        root: DIST_DIR,
        port: WEB_PORT,
        livereload: {
            port: 35735
        }
    });
});
gulp.task('http-server', function() {
    $.connect.server({
        root: REV_DIR,
        port: WEB_PORT,
        livereload: false,
        middleware: function(connect) {
            return [
                connect.middleware.compress()
            ];
        }
    });
});
gulp.task('http-server-proxy', function() {
    var options = {
        type: "http",
        port: 5001,
        hostname: "localhost",
        rule: require('./ProxyRuleModule.js'),
        dbFile: null, // optional, save request data to a specified file, will use in-memory db if not specified
        webPort: 5002, // optional, port for web interface
        socketPort: 5003, // optional, internal port for web socket, replace this when it is conflict with your own service
        disableWebInterface: false, //optional, set it when you don't want to use the web interface
        setAsGlobalProxy: false, //set anyproxy as your system proxy
        silent: true //optional, do not print anything into terminal. do not set it when you are still debugging.
    };
    new proxy.proxyServer(options);
});
//hash
gulp.task('asset-rev', function() {
    return gulp.src(['./rev/**/*.css', './rev/**/*.js'])
        //vinyl-paths 获取路径名称，作为第一个参数传入del:删除文件
        .pipe(vinylPaths(del))
        //文件名添加hash
        .pipe($.rev())
        //写到rev文件夹下
        .pipe(gulp.dest('rev'))
        //记录原名称与新名称的映射表
        .pipe($.rev.manifest({
            exclude: ['cfg.js']
        }))
        //将manifest到rev下
        .pipe(gulp.dest(REV_DIR));
});
//映射
gulp.task('manifest', function() {
    return gulp.src(['rev/**/*'])
        .pipe($.rev.manifest({
            hash: true,
            preferOnline: true,
            network: ['http://*', 'https://*', '*'],
            filename: 'index.manifest',
            exclude: ['index.manifest', 'cfg.js']
        }))
        .pipe(gulp.dest(REV_DIR));
});
//资源名称置换
gulp.task('html-assets-replace', function() {
    //读取mainfest文件
    var manifest = gulp.src("./rev/rev-manifest.json");
    return gulp.src("rev/**/*.html")
        //替换上html中manifest文件中的名称
        .pipe($.revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(REV_DIR));
});
//uglify
gulp.task('js-uglify', function() {
    return gulp.src(['rev/**/*.js'])
        .pipe(buffer())
        //.pipe($.ngmin({dynamic: true}))
        .pipe($.uglify({mangle:false}))
        .on('error', errorHandler)
        .pipe(gulp.dest(REV_DIR));
});
//css min
gulp.task('css-minify', function() {
    return gulp.src(['rev/**/*.css'])
        .pipe(buffer())
        .pipe($.minifyCss({
            keepSpecialComments: 0
        })).on('error', errorHandler)
        .pipe(gulp.dest(REV_DIR));
});
//copy
gulp.task('copy-cfg-debug', function() {
    return gulp.src(APP_DIR + '/cfg.js')
        .pipe(gulp.dest(DIST_DIR));
});
gulp.task('copy-cfg', function() {
    return gulp.src(APP_DIR + '/cfg.js')
        .pipe(gulp.dest(REV_DIR));
});
//post-asset
gulp.task('post-assets-debug', function() {
    return gulp.src(['dist/**/*', '!dist/img/*'])
        .pipe(gulp.dest('dist'));
});

gulp.task('post-assets', function() {
    return gulp.src(['rev/**/*', '!rev/img/*'])
        .pipe(gulp.dest('rev'));
});
/**
 * 将html模板页面 以angularjs的方式 压缩并缓存
 * */
gulp.task('angularTemplateCache-debug', function() {
    return gulp.src(APP_DIR + '/views/**/*.html')
        //template.js为压缩之后的文件名，注意.js后缀名不能少
        .pipe(templateCache('template.js', {
            //路径的前缀
            /*root: '/',*/
            standalone: true,
            //模块的名字
            module: 'templateBundle'
        }))
        .pipe(gulp.dest(DIST_DIR + '/js/'));
});
gulp.task('angularTemplateCache', function() {
    return gulp.src(APP_DIR + '/views/**/*.html')
        //template.js为压缩之后的文件名，注意.js后缀名不能少
        .pipe(templateCache('template.js', {
            //路径的前缀
            //模块的名字
            standalone: true,
            module: 'templateBundle'
        }))
        .pipe(gulp.dest(REV_DIR + '/js/'));
});

gulp.task('dev', function(cb) {
    $.sequence(
        'clean',
        'sourceMap',
        'html-min-debug',
        'image-debug',
        'font-debug',
        'lib-debug',
        'scss-compile-debug',
        'browserify-debug',
        'angularTemplateCache-debug',
        'copy-cfg-debug',
        'http-server-debug',
        'watch'
    )(cb);
});
gulp.task('wechat', function(cb) {
    $.sequence(
        'clean',
        'sourceMap',
        'html-min-debug',
        'image-debug',
        'font-debug',
        'lib-debug',
        'scss-compile-debug',
        'browserify-debug',
        'angularTemplateCache-debug',
        'copy-cfg-debug',
        'http-server-debug',
        'http-server-proxy',
        'watch'
    )(cb);
});
gulp.task('build', function(cb) {
    $.sequence(
        'clean',
        'sourceMap',
        'html-min-debug',
        'image-debug',
        'font-debug',
        'lib-debug',
        'scss-compile-debug',
        'browserify-debug',
        'angularTemplateCache-debug',
        /*'css-concat-debug',*/
        /*'post-assets-debug',*/
        'copy-cfg-debug'
    )(cb);
});
gulp.task('prod', function(cb) {
    $.sequence(
        'clean',
        'sourceMap',
        'html-min',
        'image',
        'font',
        'lib',
        'scss-compile',
        'browserify',
        'angularTemplateCache',
        'js-uglify',
        'css-minify',
        'asset-rev',
        'manifest',
        'html-assets-replace',
        'post-assets',
        'copy-cfg'
    )(cb);
});
gulp.task('default', ['dev']);
