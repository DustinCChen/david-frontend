// spack.config.mjs
import { config } from "@swc/core/spack.js"; // ✅ Add .js extension
import path from "node:path";
import { test_js_file } from "../config/index.js";

export default config({
  entry: { web: test_js_file },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
});