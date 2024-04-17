/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  const n = grid.length;
  const notSet = new Set(); // 非冠军的，就标记下

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        notSet.add(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!notSet.has(i)) {
      return i;
    }
  }
  return 0;
};

console.log(
  findChampion([
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
