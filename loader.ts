import * as fs from 'fs';

const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {
  env: {
    abort(_msg: any, _file: any, line: any, column: any) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};

export const wasm: any = new WebAssembly.Instance(compiled, imports).exports;
