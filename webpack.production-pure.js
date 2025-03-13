const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./index.js",
  output: {
    filename: "milgraphics.js",
    path: path.resolve(path.resolve(), "dist"),
    library: "milgraphics",
    libraryTarget: "umd",
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { esmodules: false, ie: "10" },
                  useBuiltIns: "entry",
                  corejs: 3,
                },
              ],
              "@babel/react",
            ],
            plugins: [
              "@babel/plugin-transform-destructuring",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-spread"
            ]
          }
        }
      }
    ]
  }
};
