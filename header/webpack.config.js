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
    publicPath: 'http://localhost:9004/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9004,
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
      title: 'Header'
    }),
    new ModuleFederationPlugin({
      name: "HeaderApp",
      filename: 'remoteEntry.js',
      exposes:{
        './HeaderComponent':'./src/App'
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
