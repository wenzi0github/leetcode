/**
 * https://leetcode.cn/problems/the-masseuse-lcci/
 *
 * 与 198.js 小偷偷东西一样，dp[i]表示到当前位置的最大值，分两种情况：
 * 1. 预约nums[i]，则dp[i] = dp[i-2] + nums[i]; // nums[i-1]不能预约
 * 2. 不预约nums[i]，则dp[i] = dp[i-1];
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  const { length } = nums;
  const dp = [];

  if (length <= 0) {
    return 0;
  }
  if (length <= 1) {
    return nums[0];
  }
  if (length <= 2) {
    // 有2个时，只能预约其中的1个
    return Math.max(nums[0], nums[1]);
  }
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i <= length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[length - 1];
};
