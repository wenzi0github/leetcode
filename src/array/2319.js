/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;

  /**
   * 1. 需要判断两个对角线；
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        // 对角线
        if (grid[i][j] === 0) {
          // 对角线不能为0，若有0的数据，直接返回false
          return false;
        }
      } else {
        // 非对角线
        if (grid[i][j]) {
          // 非对角线都是0，若存在非0的数据，直接返回false
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ])
);
console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ])
);
