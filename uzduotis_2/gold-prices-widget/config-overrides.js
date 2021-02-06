const path = require("path");

module.exports = function overrides(config, env) {
  return {
    ...config,
    output: {
      filename: "static/js/gold-prices-chart-widget.js",
      chunkFilename: "static/js/gold-prices-chart-widget.[name].js",
      path: path.join(__dirname, "build"),
      pathinfo: false,
      futureEmitAssets: true,
      publicPath: "/",
      jsonpFunction: "webpackJson-gold-prices-chart-widget",
      globalObject: "this",
    },
  };
};
