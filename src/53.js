/**
 * https://leetcode.cn/problems/maximum-subarray/
 *
 * 53. 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 
 * 思路：动态规划，连续子数组的最大和，要么自己就是最大的（前面的和可能是负数），要么跟前面的数连起来的和是最大的，因此，
 * 当前位置的最大和就是 dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
 * 那么所有的连续子数组的最大和，就是 数组dp 里的最大值。
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

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
