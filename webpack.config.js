const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    bundle: path.resolve(__dirname, "./src/scripts/index.js"),
    main: path.resolve(__dirname, "./src/scripts/main.js"),
    script: path.resolve(__dirname, "./src/scripts/script.js"),
  },
  output: {
    // filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    clean: true,
    assetModuleFilename: "img/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // Stylesheet
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      linkType: "text/css",
    }),
    // HTML Template
    new HtmlWebpackPlugin({
      title: "HTML Application Assistant",
      filename: "index.html",
      template: "./src/html/index.html",
      excludeChunks: ["script"],
    }),
  ],
};
