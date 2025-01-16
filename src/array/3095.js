/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  const { length } = nums;
  const result = new Array(length).fill(0);
  let count = 0;

  while (count <= length) {
    for (let i = 0; i < length - count; i++) {
      result[i] = result[i] | nums[i + count];

      if (result[i] >= k) {
        return count + 1;
      }
    }
    count++;
  }
  return -1;
};