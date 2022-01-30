// say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. YOu may only move down or right. In how many ways can you travel to the goal on a grid with dimensions m * n ?

function gridTraveler(m, n, memo = {}) {
  let key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (n === 0 || m === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

// without memoisation
//time complexity is O(2^m+n)
//space comlexity is O(m + n)

// with memoisation
//time complexity is O(m*n)
//space comlexity is O(m + n)

console.log(gridTraveler(18, 18));
