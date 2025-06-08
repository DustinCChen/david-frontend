// spack.config.cjs
const { config } = require("@swc/core/spack");
const path = require("node:path");
// const { test_js_file } = require("../config/index.js");

module.exports = config({
  entry: { web: path.join(__dirname, "data", "test.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
});
