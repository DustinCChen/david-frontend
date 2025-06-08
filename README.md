###  git cli
```bash
git init
git config --list
git remote add origin git@github.com:DustinCChen/david-frontend.git
git remote 
bun create vite@latest react-demo --template react-ts 
cd react-demo
bun install
bun run dev
```

### knowledge notes
* public  folder is for static files,when build,it will be copied to dist folder
* src  folder is for source files
* assets folder is for static files,but not public,when build,it will be copied to dist folder，会二次构建编译，文件名称加上哈希后缀
* 直接访问http://localhost:5173/data.json，可以获取到data.json文件中的数据，不存在跨域问题,打包后访问http://localhost:5173/data.json，依然不会报跨域问题
* vite-env.d.ts 三斜杠指令，引入ts文件，比如引入图片，可以用import img from "./images/1.png"，会自动生成一个ts文件，里面定义img变量，类型为string，/Users/dustchen/workSpace/david-frontend/react-demo/node_modules/vite/client.d.ts，声明各种文件类型
* babel的作用，convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
  * Transform syntax
  * Polyfill features
  * Compile JSX
  * Compile TypeScript 
* https://astexplorer.net/
* https://babeljs.io/docs/en/babel-preset-env
* @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).  做了自动化的预设，减少手工操作