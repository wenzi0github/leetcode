/**
 * https://leetcode.cn/problems/reverse-bits-lcci/
 * 
 * 思路：统计连续1的个数，然后查找数字为0的位置，加上前后1的个数，就是连续1的个数；
 * 不过还是要注意两点：
 * 1. 输入的数字会存在负数，因此在位移时要使用三箭头；
 * 2. 这是32位的整数，因此最大只能返回32；
 */

/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  const arr = [];
  let oneSum = 0;

  while (num) {
    const item = num & 1;
    if (item) {
      oneSum++;
    } else {
      if (oneSum) {
        arr.push(oneSum);
      }
      oneSum = 0;
      arr.push(0);
    }
    num >>>= 1;
  }
  if (oneSum) {
    arr.push(oneSum);
  }
  arr.push(0);
  const { length } = arr;
  let maxValue = 1;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      const prevNum = i >= 1 ? arr[i - 1] : 0;
      const nextNum = i < length - 1 ? arr[i + 1] : 0;

      maxValue = Math.max(maxValue, prevNum + nextNum + 1);
    }
  }

  return Math.min(maxValue, 32);
};

console.log(reverseBits(1775));
console.log(reverseBits(7));
