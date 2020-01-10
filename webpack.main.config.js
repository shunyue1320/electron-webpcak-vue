const path = require('path')

module.exports = {
  target: 'electron-main',
  entry: { main: './src/main/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}