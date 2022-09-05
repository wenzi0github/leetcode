/**
 * https://leetcode.cn/problems/w3tCBm/
 *
 * 思路：
 * 一、最粗暴的解法：每个数拿出来，计算该数对应的二进制的1的个数；
 * 二、一个数是他一半数字的二进制末尾，再添加0或1，如
 *  1. 奇数5(101)就是2(10)和1(1)的结合，因此5比他的一半要多一个1；
 *  2. 偶数4(100)就是2(10)和0的结合，因此4和他的一半的1的个数是一样的；
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [0]; // 0有0个1，1有1个1

  for (let i = 0; i <= n; i++) {
    result[i] = result[i >>> 1] + (i & 1); // i为奇数时会多一个1
  }

  return result;
};
