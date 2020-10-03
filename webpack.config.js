const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    port: 7777,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".ttf", ".sass"],
    alias: {
      src: path.resolve(__dirname, "src/")
    }
  },
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      { test: /\.ts|.tsx$/, exclude: /node_modules/, use: [{ loader: "babel-loader" }, { loader: "ts-loader", options: { transpileOnly: true }}]},
      { test: /\.s[ac]ss$/i, use: [ "style-loader", "css-modules-typescript-loader", { loader: "css-loader", options: { modules: true }}, "sass-loader" ]},
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: "file-loader", options: { name: "[name].[ext]", outputPath: "fonts/" }}]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};