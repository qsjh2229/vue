
const target ='http://localhost:8081'

module.exports = {
  chainWebpack : config => {
    config.plugins.delete('prefetch');
  },
  devServer : {
    proxy : {
      '^api':{
        target,
        changeOrigin: true
      },
      '/oauth2.0' : {
        target : 'htpps://nid.naver.com'
      }
    }
  }
}