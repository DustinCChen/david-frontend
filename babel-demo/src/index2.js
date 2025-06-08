import babel from "@babel/core";
import fs from "node:fs";
import { test2_js_file } from "../config/index.js";
// import path from "node:path";
/*
 * 开发一个babel插件，支持以下功能：
 * 1. 将所有的箭头函数转换为普通函数。
 * 2. 将所有的类属性转换为构造函数中的属性赋值。
 * 3. 将所有的类方法转换为原型方法。
 */
// types包含了ast中所有类型的节点
const transformArrowFunction = ({ types: t }) => {
  return {
    name: "transform-arrow-function",
    visitor: {
      //匹配所有的箭头函数
      ArrowFunctionExpression(path) {
        console.log("转换箭头函数");
        // console.log(path.node);
        const node = path.node; // 获取当前的箭头函数节点
        const arrowFunction = t.functionExpression(
          // node.id, // 函数名
          null, // 函数名为null，因为箭头函数没有名字
          node.params, // 参数列表
          // node.body, // 函数体
          t.blockStatement(
            [t.returnStatement(node.body)] // 将箭头函数的函数体转换为返回语句
          ), // 函数体的块级语句
          node.generator, // 是否为生成器函数
          node.async // 是否为异步函数
        );
        path.replaceWith(arrowFunction); // 替换当前的箭头函数节点
      },
    },
  };
};
const transformArrowFunction2 = ({ types: t }) => ({
  name: "transform-arrow-function",
  visitor: {
    ArrowFunctionExpression(path) {
      const { node } = path;
      const body = t.isBlockStatement(node.body)
        ? node.body
        : t.blockStatement([t.returnStatement(node.body)]);

      path.replaceWith(
        t.functionExpression(
          null,
          node.params,
          body,
          node.generator,
          node.async
        )
      );
    },
  },
});
const code = fs.readFileSync(test2_js_file, "utf-8");

const result = babel.transformSync(code, {
  plugins: [transformArrowFunction],
});
console.log(result.code);

const result2 = babel.transformSync(code, {
  plugins: [transformArrowFunction2],
});
console.log(result2.code);

// const code2 = fs.readFileSync("app.jsx", "utf-8");
// const result2 = babel.transformSync(code2, {
//   presets: ["@babel/preset-react"],
// });
// console.log(result2.code);

// const code3 = fs.readFileSync("test.ts", "utf-8");
// const result3 = babel.transformSync(code3, {
//   presets: ["@babel/preset-typescript"],
//   filename: "test.ts",
// });
// console.log(result3.code);
