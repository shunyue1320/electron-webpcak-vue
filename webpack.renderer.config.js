const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  target: 'electron-renderer',
  entry: { renderer: './src/renderer/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', 
              {
                targets: { electron: process.env.npm_package_dependencies_electron.replace("^", "") }
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[contenthash].[ext]',
              esModule: false
            }
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/renderer/template.html'
    }),
    new VueLoaderPlugin(),
    new VueAutoRoutingPlugin({
      pages: 'src/renderer/pages',
      importPrefix: '@/pages/'
    })
  ]
}