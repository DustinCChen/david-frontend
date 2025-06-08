import swc from "@swc/core";
import { test_js_file, app_jsx_file} from "../config/index.js";
swc
  .transformFile(test_js_file, {
    jsc: {
      target: "es5",
      parser: {
        syntax: "ecmascript",
        jsx: false,
        dynamicImport: true,
        decorators: false,
      },
    },
  })
  .then((result) => {
    console.log(result.code);
  });

const res = swc.transformSync(
  `let a = 1;const a = (param = 1) => 1 + param;;`,
  {
    jsc: {
      target: "es5",
      parser: {
        syntax: "ecmascript",
        jsx: false,
        dynamicImport: true,
        decorators: false,
      },
    },
  }
);
console.log(res.code);

const res2 = swc.transformFileSync(app_jsx_file, {
  jsc: {
    target: "es5",
    parser: {
      syntax: "ecmascript",
      jsx: true,
      dynamicImport: true,
      decorators: false,
    },
  },
});
console.log(res2.code);
