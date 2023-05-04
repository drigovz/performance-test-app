// var webpack = require("webpack");

module.exports = {
  // plugins: [
  //   new webpack.DefinePlugin({
  //     "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  //     "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL),
  //   }),
  // ],
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "test.[name].js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  stats: {
    colors: true,
  },
  target: "web",
  externals: /k6(\/.*)?/,
  devtool: "source-map",
};
