/**
 * https://leetcode.cn/problems/GzCJIP/
 * 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
 * 每当爬上一个阶梯都要花费对应的体力值，一旦支付了相应的体力值，就可以选择向上爬一个阶梯或者爬两个阶梯。
 * 请找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
 * 
 * 思路：爬到某台阶i的体力花费dp[i]，有两种方式：
 * 1. 从i-2位置爬上来，则体力为爬到台阶i-2的体力加上从i-2到i的体力消耗：dp[i] = dp[i-2] + cost[i-2];
 * 2. 从i-1位置爬上来，则体力为爬到台阶i-1的体力加上从i-1到i的体力消耗：dp[i] = dp[i-1] + cost[i-1];
 * 则dp[i]取上面两个的最小值即可，dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = []; // 调到某个台阶所需要的体力
  const { length } = cost;

  /**
   * 初始时，可以从第0台阶或第1台阶开始，因此爬到这两个台阶时，体力消耗为0
   */
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
  }
  return dp[length];
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
