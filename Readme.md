# AssemblyScript in TypeScript

## How to set up
1. `npm init`
2. `npm i -S typescript @types/node assemblyscript`
3. `npx tsc --init`
4. `npx asinit .`
5. In tsconfig.json add
```
"compilerOptions": {
  "outDir": "./dist",
  "rootDir": "./"
},
"exclude": [
  "node_modules",
  "assembly"
]
```
6. In package.json add
```
"start": "node --experimental-modules --experimental-wasm-modules ./dist/index.js",
"build": "npm run asbuild && tsc -p ./tsconfig.json && npm run copy",
"copy": "cp -r build dist/build/",
```
7. Rename index.js to loader.ts, add any missing types and export the webassembly instance to be used from other files

## How to run
1. `npm run build`
2. `npm start`


## To read
https://docs.assemblyscript.org/quick-start
https://www.joyent.com/blog/improved-wasm-support-coming-to-node