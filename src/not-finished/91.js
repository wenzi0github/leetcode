/**
 * https://leetcode.cn/problems/decode-ways/
 * 91. 解码方式
 * 
 * 暂未解决
 *
 * 思路：这个得考虑当前数字是否可以与前一个数字组合的问题，如12，2可以与前面的1进行组合，
 * 但62或602等情况，这个数字2就无法与前面的数字组合
 *
 * 当前数字是0，必须与前一个数字组合
 *  上一个数字是1或2，可以组合dp[i] = dp[i-2]
 *  上一个数字是0或3-9，无法组合，直接return
 * 当前数字不是0
 *  当前数字是1-6且上一个数字是1或2，可以组合，dp[i] = dp[i-1] + dp[i-2]
 *    组合：dp[i] = dp[i-2]
 *    不组合：d[i] = dp[i-1]
 *  其他情况，无法组合，如32, 27等
 *    不组合：dp[i] = dp[i-1];
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const { length } = s;
  const dp = []; // 到当前位置的组合数量

  if (s[0] === '0') {
    // 若第1个数字是0，则无法解析，直接返回
    return 0;
  }
  dp[0] = 1; // 长度为1时，只有一种组合方式

  if (length === 1) {
    return dp[0];
  }

  /**
   * 长度为2时，若s[1]为0，只能与前面的数字组合，即只有一种组合方式；
   * 若不为0，则可以有两种方式，如'12'可以拆分为[1,2]或[12]
   */
  dp[1] = s[1] === '0' || s[1] > '6' ? 1 : 2;

  for (let i = 2; i < length; i++) {
    if (s[i] === '0') {
      /**
       * 当前位置是0，只能与前面的组合，但也得考虑是否可以组合，
       * 如前面的数字是0或3-9，是无法组合的
       */
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        // 前面的数字为1或2时，才能组合，其他情况直接return即可
        dp[i] = dp[i - 2];
      } else {
        return 0;
      }
    } else {
      // s[i] 不为0
      if (s[i] <= '6' && (s[i - 1] === '1' || s[i - 1] === '2')) {
        // s[i]可以与s[i-1]进行组合，那么就有组合和不组合两种方案
        dp[i] = dp[i - 1] + dp[i - 2];
      } else {
        // 不能与前面进行组合，则当前组合数量就是上一个数组的组合数量
        dp[i] = dp[i - 1];
      }
    }
  }
  console.log(dp);
  return dp[length - 1];
};

// console.log(numDecodings('12'));
// console.log(numDecodings('226'));
// console.log(numDecodings('227'));
console.log(numDecodings('2611055971756562'));
