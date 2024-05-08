const getNumLen = (num) => {
  if (num === 0) {
    return 1;
  }

  let len = 0;
  const neg = num < 0 ? 1 : 0;

  num = Math.abs(num);

  while (num) {
    len++;

    num = Math.floor(num / 10);
  }

  return len + neg;
};

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = [];

  for (let j = 0; j < n; j++) {
    let maxLen = 0;

    for (let i = 0; i < m; i++) {
      const len = getNumLen(grid[i][j]);

      maxLen = Math.max(maxLen, len);
    }

    result.push(maxLen);
  }

  return result;
};
