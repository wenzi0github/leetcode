/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const { length } = nums;
  if (length === 1) {
    return 0;
  }
  if (nums[0] > nums[1]) {
    return 0;
  }
  if (nums[length - 1] > nums[length - 2]) {
    return length - 1;
  }
  for (let i = 1; i < length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
};
