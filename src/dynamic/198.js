/**
 * https://leetcode.cn/problems/house-robber/
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 思路：动态规划，dp[i]表示到当前可以偷窃的最大值，若不偷 nums[i]，dp[i]跟dp[i-1]相等，若偷 nums[i]，则dp[i]为dp[i-2] + nums[i] （dp[i-2]为i-2处的最大值），
 * 状态方程：dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const { length } = nums;
  const dp = []; // 当前的最大值

  if (length <= 1) {
    return nums[0];
  }
  if (length <= 2) {
    return Math.max(nums[0], nums[1]);
  }
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[length - 1];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 2, 3, 1, 1, 5, 8]));
console.log(rob([2, 1]));
console.log(rob([1, 3, 1]));
console.log(rob([2, 1, 1, 2]));
