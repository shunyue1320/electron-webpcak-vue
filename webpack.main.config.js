const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  target: 'electron-main',
  entry: { main: './src/main/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}