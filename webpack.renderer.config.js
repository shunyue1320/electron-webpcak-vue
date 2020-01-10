const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'electron-renderer',
  entry: { renderer: './src/renderer.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
    })
  ]
}