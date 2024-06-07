/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const set = new Set();
  const n = grid.length;
  let sum = 0;
  let repeat = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (set.has(grid[i][j])) {
        repeat = grid[i][j];
      } else if (repeat <= 0) {
        set.add(grid[i][j]);
      }
      sum += grid[i][j];
    }
    // if (repeat >= 0) {
    //   break;
    // }
  }
  // console.log(sum, ((1 + n * n) * n * n) / 2);
  return [repeat, ((1 + n * n) * n * n) / 2 - (sum - repeat)];
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
