/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let flag = nums[0] & 1;
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i] & 1;

    if (flag === cur) {
      // 奇偶性相同，返回false
      return false;
    }
    flag = cur;
  }
  return true;
};
