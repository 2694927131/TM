
// vue.config.js
module.exports = {
  configureWebpack: config => {
    config.externals = {
      qq: 'qq',
      TMap: 'TMap',
    }
  },

  lintOnSave: false
}