/**
 * 121. 买卖股票的最佳时机
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock
 * 
 * 注意：这里只能买卖一次，不会多次买卖！
 * 思路：动态规划，dp[i]表示到当前的最低价格，状态方程：dp[i] = Math.min(dp[i - 1], prices[i]); 那么最大的利润就是 Math.max(prices[i] - dp[i - 1], maxValue)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = []; // i之前的最低价格
  const { length } = prices;
  let maxValue = 0;
  dp[0] = prices[0];

  for (let i = 1; i < length; i++) {
    maxValue = Math.max(prices[i] - dp[i - 1], maxValue);
    dp[i] = Math.min(dp[i - 1], prices[i]);
  }

  return maxValue;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
