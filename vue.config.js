const path = require('path')
const webpack = require('webpack')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: './', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jQuery': 'jquery'
    }))
  },
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
  },
  css: {
    extract: true, // 是否使用css分离插件
    sourceMap: false // 开启 CSS source maps?
    // loaderOptions: {} // css预设器配置项
  },
  devServer: {
    port: 8080, // 端口
    // proxy: 'http://wangzhuan.weimobdev.com' // 设置代理 处理跨域 dev环境
    proxy: {
      '/wm.css': {
        // 打点
        // target: 'http://statistic-dev.weimobdc.com' // dev打点
        target: 'https://statistic-qa.weimobdc.com' // qa打点
        // target: 'https://statistic.weimobdc.com' // online打点
      },
      // '/cas/logout/': {
      //   target: 'http://sso.pl.internal.hsmob.com'
      // },
      '/cas/logout/': {
        target: 'http://cas.hsmob.com'
      },
      '/interactive/wz/pc/': {
        // 'http://wangzhuan.weimobdev.com' // 设置代理 处理跨域 dev环境
        target: 'http://wangzhuan.weimobqa.com' // 设置代理 处理跨域 qa环境
        // target: 'http://10.252.2.119:8080' // 先用QA IP代替QA域名
        // target: 'http://172.19.22.44:8080' // 先用QA IP代替QA域名
      },
      '/interactive/wz/app/': {
        // 'http://wangzhuan.weimobdev.com' // 设置代理 处理跨域 dev环境
        target: 'http://wangzhuan.weimobqa.com' // 设置代理 处理跨域 qa环境
        // target: 'http://10.252.2.119:8080' // 先用QA IP代替QA域名
        // target: 'http://172.19.22.44:8080' // 先用QA IP代替QA域名
      }
    }
  }
}
