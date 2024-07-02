const primeSet = new Set([
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
]); // 100以内的质数

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  const { length } = nums;
  let start = -1;
  let end = -1;

  for (let i = 0; i < length; i++) {
    if (primeSet.has(nums[i])) {
      if (start === -1) {
        start = i;
      } else {
        end = i;
        break;
      }
    }
  }
  // end为-1表示只有1个质数
  return end === -1 ? 0 : end - start;
};
