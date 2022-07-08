require('dotenv/config');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const serverPublicPath = path.join(__dirname, 'server', 'public');
const clientPath = path.join(__dirname, 'client/');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new Dotenv()
  ],
  entry: [
    clientPath
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: serverPublicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: serverPublicPath,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.DEV_SERVER_PORT,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },
    stats: 'minimal',
    watchContentBase: true,
    devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',
    plugins: [
      new webpack.EnvironmentPlugin([]),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      isDevelopment && new webpack.NoEmitOnErrorsPlugin(),
      isDevelopment && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
  }
};
