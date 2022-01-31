// write a function 'allconstruct(target,wordbank)' that accepts a target string and an array of strings
// the function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenation elements of the 'wordBank' array. Each element of the 2D array should represent one combination that construct the 'target'.
// you may reuse elements of 'wordBank' as many times as needed.

function allconstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let arr = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let noOfWays = allconstruct(target.slice(word.length), wordBank, memo);
      const targetWays = noOfWays.map((way) => [word, ...way]);
      arr.push(...targetWays);
    }
  }
  memo[target] = arr;
  return arr;
}

console.log(
  allconstruct("purple", ["pu", "r", "ple", "purp", "le", "p", "ur", "pl", "e"])
);
