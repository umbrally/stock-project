module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/stock-predictor/' : "./",
  "transpileDependencies": [
    "vuetify"
  ]
}