import * as webpack from "webpack";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

const webpackConfig: webpack.Configuration = {
  // WARNING: MUST set the 'mode' manually because it isn't done by NX/NG cli
  mode,
  node: {
    tty: "empty",
    zlib: "empty",
    http: "empty",
    https: "empty",
    os: "empty",
    stream: "empty",
  },
  module: {
    rules: [
      // add custom rules here
    ],
  },
  plugins: [
    // add custom plugins here
  ],
};

module.exports = webpackConfig;
