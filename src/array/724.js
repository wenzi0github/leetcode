/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const { length } = nums;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 1; i < length; i++) {
    rightSum += nums[i];
  }
  let mid = 0;

  if (leftSum === rightSum) {
    return mid;
  }

  while (mid < length - 1) {
    mid++;
    leftSum += nums[mid - 1];
    rightSum -= nums[mid];

    if (leftSum === rightSum) {
      return mid;
    }
  }
  return leftSum === rightSum ? mid : -1;
};
