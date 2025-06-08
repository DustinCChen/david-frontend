import babel from "@babel/core";
import fs from "node:fs";
// import path from "node:path";
import { test_js_file, app_jsx_file, test_ts_file } from "../config/index.js";
const code = fs.readFileSync(test_js_file, "utf-8");

const result = babel.transformSync(code, {
  presets: ["@babel/preset-env"],
});
console.log(result.code);

const code2 = fs.readFileSync(app_jsx_file, "utf-8");
const result2 = babel.transformSync(code2, {
  presets: ["@babel/preset-react"],
});
console.log(result2.code);

const code3 = fs.readFileSync(test_ts_file, "utf-8");
const result3 = babel.transformSync(code3, {
  presets: ["@babel/preset-typescript"],
  filename: "test.ts",
});
console.log(result3.code);
