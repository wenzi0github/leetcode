/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let index = 0;

  // 倒序
  nums.sort((a, b) => (a >= b ? -1 : 1));
  if (nums[0] < 0) {
    // 若最大的数比0还小，则0就是特殊值
    return 0;
  }
  const { length } = nums;
  let i = 0;
  let j = 0;

  while (i < length) {
    if (nums[i] >= index) {
    }
    i++;
  }
};
