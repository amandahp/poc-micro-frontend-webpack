const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports={
  entry: './src/index.js',
  cache: false,

  mode: "development",
  optimization: {
    minimize: false,
  },
  
  output:{
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9001/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9001,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'Home'
    }),
    new ModuleFederationPlugin({
      name: "HomeApp",
      filename: 'remoteEntry.js',
      exposes:{
        './HomePage':'./src/App'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    })
  ]

}
