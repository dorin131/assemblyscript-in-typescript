// The entry file of your WebAssembly module.

export function fibonacci(n: i32): i32 {
  return n < 1 ? 0
       : n <= 2 ? 1
       : fibonacci(n - 1) + fibonacci(n - 2);
}
