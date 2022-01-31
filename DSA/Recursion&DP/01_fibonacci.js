function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
// without memoisation
//time complexity is O(2^n)
//space comlexity is O(n)

// with memoisation
//time complexity is O(n)
//space comlexity is O(n)

// const sec = {
//   6: "tarun",
// };
// console.log(sec[6]);

console.log(fib(50));
