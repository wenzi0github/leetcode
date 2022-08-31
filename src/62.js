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
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = createTwoDimArr(m, n, 0);
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
