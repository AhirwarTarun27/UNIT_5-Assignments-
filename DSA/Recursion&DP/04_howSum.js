//write a function 'howSum(targetSum,numbers)' that takes in a targetSum and an array of numbers as arguments.

//the function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

//if there are multiple combinations possible, you may return any single one.

let target = 7;
let num = [2, 3];

function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(300, [7, 14]));

// without memoisation
//time complexity is O(n^m *m)
//space comlexity is O(m)

// with memoisation
//time complexity is O(n*m^2)
//space comlexity is O(m *m)
