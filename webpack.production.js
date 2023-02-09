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
  }
};
