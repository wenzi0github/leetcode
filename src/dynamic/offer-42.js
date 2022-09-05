/**
 * 与 53.js 一样
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = []; // 自己或与之前的数据连起来的当前最大值，dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
  const { length } = nums;
  let maxValue = nums[0]; // 所有连续数组的最大值

  if (length <= 1) {
    return maxValue;
  }
  dp[0] = nums[0];
  for (let i = 1; i < length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    maxValue = Math.max(dp[i], maxValue);
  }
  return maxValue;
};
