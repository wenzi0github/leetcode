/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const { length } = nums;
  let maxValue = (nums[0] - 1) * (nums[1] - 1); // nums至少有2个，可以安全地使用这两个数值

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      maxValue = Math.max((nums[i] - 1) * (nums[j] - 1), maxValue);
    }
  }

  return maxValue;
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
