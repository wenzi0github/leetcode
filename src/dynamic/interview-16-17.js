/**
 * https://leetcode.cn/problems/contiguous-sequence-lcci/
 * 总和最大的连续数列，与offer-42相同
 *
 * 到当前位置时，要么自己本身就是最大的，要么自己跟前面连起来是最大的，
 * 则 dp[i] = Math.max(nums[i], nums[i] + dp[i]);
 * 总的最大值，就是dp数组里的最大值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = [];
  const { length } = nums;
  let maxValue = nums[0];
  dp[0] = nums[0];

  for (let i = 1; i < length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);

    maxValue = Math.max(maxValue, dp[i]);
  }

  return maxValue;
};
