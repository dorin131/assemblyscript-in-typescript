import { wasm } from './loader';

function fibonacci(n: number): number {
  return n < 1 ? 0
       : n <= 2 ? 1
       : fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('TS');
console.log('TS =', fibonacci(45));
console.timeEnd('TS');

console.time('AS');
console.log('AS =', wasm.fibonacci(45));
console.timeEnd('AS');
