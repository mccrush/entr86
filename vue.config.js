module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },

  productionSourceMap: false,

  pwa: {
    name: 'ENTR',
    themeColor: '#ffcc00',
    manifestOptions: {
      background_color: '#ffcc00'
    }
  }
}