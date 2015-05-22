fis.config.set('pack', {
    'pkg/lib.js': [
        '/modules/underscore/**.js',
        '/modules/zepto/**.js'
    ]
});

//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
// fis.config.set('roadmap.domain', 'http://127.0.0.1:8080');

//使用hand release命令时，添加--optimize或-o参数即可生效
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用hand release命令时，添加--lint或-l参数即可生效
// fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

//csssprite处理时图片之间的边距，默认是3px
// fis.config.set('settings.spriter.csssprites.margin', 20);


