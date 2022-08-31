/**
 * 创建二维数组
 * @param {number} m
 * @param {number} n
 * @param {T} fillValue
 */
const createTwoDimArr = (m, n, fillValue) => {
  const arr = new Array(m);
  return arr.fill(0).map((_) => new Array(n).fill(fillValue));
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    // 若起点或终点有石头，直接返回
    return 0;
  }

  const dp = createTwoDimArr(m, n, 0);
  let hasStone = false;
  for (let i = 0; i < m; i++) {
    if (hasStone || obstacleGrid[i][0]) {
      dp[i][0] = 0;
      hasStone = true;
    } else {
      dp[i][0] = 1;
    }
  }
  hasStone = false;
  for (let j = 0; j < n; j++) {
    if (hasStone || obstacleGrid[0][j]) {
      dp[0][j] = 0;
      hasStone = true;
    } else {
      dp[0][j] = 1;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        // 没有石头时，才计算到该位置的
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  // console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
