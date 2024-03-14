/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  let i = nums.length - 2;
  while (nums.length > 1 && i >= 0) {
    // 只有数组长度大于1时，才进行合并操作
    if (nums[i] <= nums[i + 1]) {
      nums[i] += nums[i + 1];
      nums.splice(i + 1, 1); // 删除后面的元素
    }
    i--;
  }
  return Math.max(...nums);
};

console.log(maxArrayValue([5, 3, 3]));
