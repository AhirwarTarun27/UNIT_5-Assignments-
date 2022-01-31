// write a function'canConstruct(target,wordBank)' that accecpts a target string and an array of strings.
//the function should return a bolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.
// you may reuse elements of 'wordBank' as many times as needed.

function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const sufix = target.slice(word.length);
      if (canConstruct(sufix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
);

// Brute Force
//time complexity is O(n^m *m)
//space comlexity is O(m^2)

// with memoisation
//time complexity is O(n*m^2)
//space comlexity is O(m *m)
