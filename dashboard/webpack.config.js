const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9005/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9005,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  module: {    
    rules:[
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
            presets: [require.resolve("@babel/preset-react")]
          }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'Dashboard'
    }),
    new ModuleFederationPlugin({
      name: "Dashboard",
      remotes: {
        HomeApp: 'HomeApp@http://localhost:9005/remoteEntry.js',
        ContactApp: 'ContactApp@http://localhost:9007/remoteEntry.js'

      }
    })
  ]

}