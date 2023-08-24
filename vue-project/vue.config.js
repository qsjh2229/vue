const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports ={
  chainWebpack:config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
}