import babel from "@babel/core";
import fs from "node:fs";
// import path from "node:path";

const code = fs.readFileSync("test.js", "utf-8");
const result = babel.transformSync(code);
// const result = babel.transformSync(code, {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           node: "current",
//         },
//       },
//     ],
//   ],
//   // plugins: ["@babel/plugin-transform-arrow-functions"],
// });
// console.log(result.code);

const code2 = fs.readFileSync("app.jsx", "utf-8");
const result2 = babel.transformSync(code2);
console.log(result2.code);

const code3 = fs.readFileSync("test.ts", "utf-8");
const result3 = babel.transformSync(code3, {
  presets: ["@babel/preset-typescript"],
  filename: "test.ts",
});
console.log(result3.code);
