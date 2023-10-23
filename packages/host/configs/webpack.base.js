const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "../../../.env"),
});

const federationConfig = require("./federationConfig");

module.exports = {
  entry: {
    main: path.join(__dirname, "../src/index.js"),
  },

  output: {
    publicPath: "auto",
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
              [
                "@babel/preset-react",
                { "runtime": "automatic", "importSource": "@emotion/react" }
              ]
            ],
            plugins: [
              [
                "@emotion/babel-plugin",
                {
                    // sourceMap is on by default but source maps are dead code eliminated in production
                    sourceMap: true,
                    autoLabel: "dev-only",
                    labelFormat: "[local]",
                    cssPropOptimization: true,
                },
              ],
            ],
            
          },
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
    new FederatedTypesPlugin({
      federationConfig: federationConfig(process.env.DS_URL, process.env.FILMS_URL),
    }),

    new HtmlWebpackPlugin({
      favicon: "public/favicon.ico",
      template: "public/index.html",
      title: "SWAPI Web Client HOST",
      filename: "index.html",
      chunks: ["main"],
      // manifest: "./public/manifest.json",
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  target: "web",
};
