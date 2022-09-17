/**
 * https://leetcode.cn/problems/three-steps-problem-lcci/
 * 每次可以走1步，2步或3步，求到台阶n，有多少中解法？
 *
 * 思路：与之前的每次可以走1步或者2步类似，dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
 */

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const MOD = 1000000007;
  const dp = [0, 1, 2, 4];

  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;
  }
  return dp[n];
};
