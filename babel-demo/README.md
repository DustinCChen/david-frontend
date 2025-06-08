### cmd cli
````bash
pnpm init 
pnpm i -D @babel/cli @babel/core @babel/preset-env
pnpm i -D @babel/preset-react

babel src --out-dir dist --presets @babel/preset-env,@babel/preset-react
````