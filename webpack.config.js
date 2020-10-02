const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    port: 7777,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      { test: /\.ts|.tsx$/, exclude: /node_modules/, use: [{ loader: 'babel-loader' }, { loader: 'ts-loader', options: { transpileOnly: true }}]},
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};