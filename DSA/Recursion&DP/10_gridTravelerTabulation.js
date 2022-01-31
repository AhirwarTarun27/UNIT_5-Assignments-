//Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. you may only move down or right.
// in how many ways can you travel to the goal on a grid with dimensions m * n?

function gridTraveler(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let r = 0; r <= m; r++) {
    for (let c = 0; c <= n; c++) {
      let current = table[r][c];
      if (r + 1 <= m) table[r + 1][c] += current;
      if (c + 1 <= n) table[r][c + 1] += current;
    }
  }
  return table[n][m];
}

console.log(gridTraveler(3, 3));
