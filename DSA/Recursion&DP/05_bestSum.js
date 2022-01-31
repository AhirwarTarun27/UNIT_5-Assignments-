//write a function 'estSum(targetSum,numbers)' that takes in a targetSum and an array of numbers as arguments.
//the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
//If there is a tie for the shortest combination, you may return any one of the shortest.

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

console.log(bestSum(100, [1, 2, 5, 25]));

// Brute Force
//time complexity is O(n^m *m)
//space comlexity is O(m^2)

// with memoisation
//time complexity is O(n*m^2)
//space comlexity is O(m *m)
