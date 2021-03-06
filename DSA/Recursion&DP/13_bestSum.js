//write a function 'estSum(targetSum,numbers)' that takes in a targetSum and an array of numbers as arguments.
//the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
//If there is a tie for the shortest combination, you may return any one of the shortest.

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (num of numbers) {
        const combination = [...table[i], num];
        if (
          table[i + num] == null ||
          combination.length < table[i + num].length
        )
          table[i + num] = combination;
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum(100, [25, 3, 3]));
