//write a function 'countConstruct(target,wordBank)' that accepts a target string and an array of strings .

// the function should return the number os ways that the 'target' can be constructed by conatenating elements of the 'wordBank' array.
// you may reuse elements of 'wordBank' as many times as needed

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const noOfWays = countConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      count += noOfWays;
    }
  }
  memo[target] = count;
  return count;
}

console.log(
  countConstruct("eeeeeeeeeeeeeee", ["e", "ee", "eee", "eeeee", "eeeeee"])
);
