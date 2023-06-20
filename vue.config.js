const { defineConfig } = require('@vue/cli-service');
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  publicPath: '/vip/',
  pages: {
    index: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      title: '入口1'
    },
    sys: {
      entry: 'src/pages/main.js',
      // 模板来源
      template: 'public/sys.html',
      title: '入口222'
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@sys': resolve('src/pages')
      }
    }
  }
})
