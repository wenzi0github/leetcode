const check = (grid, row, col) => {
  const { length } = grid;
  for (let i = 0; i < length; i++) {
    if (grid[row][i] !== grid[i][col]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const { length } = grid;
  let count = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (check(grid, i, j)) {
        count++;
      }
    }
  }

  return count;
};
