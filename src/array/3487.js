/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let sum = 0;
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num > 0 && !set.has(num)) {
      set.add(num);
      sum += num;
    }
  }

  return sum;
};
