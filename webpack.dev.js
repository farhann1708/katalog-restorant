// webpack.dev.js

const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3003, // Mengubah port menjadi 3000
  },
});
