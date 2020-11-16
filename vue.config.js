const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/styles/global.less')] // less所在文件路径
    }
  },
  // host port配置
  devServer: {
    host: 'localhost',
    port: 9999,
    open: true
  },
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')

      // 配置使用cdn引入的资源 
      config.set('externals', {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        'vue-quill-editor': 'VueQuillEditor' 
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
    })
  }
}
