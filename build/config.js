const path = require('path')
const getEntries = require('./entry')
const devConfig = {
  devServer: {
    port: 8866,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  //...
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve('examples'))
    config.resolve.alias.set('~', path.resolve('examples'))
    config.module
      .rule('js')
      .include.add(/packges/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
const buildConfig = {
  outputDir: 'lib',
  productionSourceMap: false,
  configureWebpack: {
    entry: { ...getEntries('packages') },
    output: {
      libraryExport: 'default',
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    externals: [
      {
        pinia: 'pinia',
        vue: 'vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        'element-ui': 'ELEMENT',
        echarts: 'echarts',
        'vue-echarts': 'VueECharts',
        moment: 'moment',
        axios: 'axios'
      }
    ]
  },
  css: {
    sourceMap: false,
    extract: {
      filename: 'style/[name].css'
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve('examples'))
    config.resolve.alias.set('~', path.resolve('examples'))
    // 处理js
    config.module
      .rule('js')
      .include.add(/packges/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    // 处理字体
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(options => {
        return options
      })
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  }
  //...
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
