/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const result = [...matrix];

  for (let j = 0; j < n; j++) {
    let maxNum = -1; // 该列的最大值
    for (let i = 0; i < m; i++) {
      maxNum = Math.max(maxNum, matrix[i][j]);
    }
    for (let i = 0; i < m; i++) {
      if (matrix[i][j] === -1) {
        result[i][j] = maxNum;
      }
    }
  }

  return result;
};

console.log(
  modifiedMatrix([
    [-1, 0, 0, 2, 2],
    [2, 0, 0, 2, 1],
    [4, 3, 2, 1, 1],
    [-1, -1, 0, 2, 4],
    [1, 0, 3, -1, 0],
  ])
);
