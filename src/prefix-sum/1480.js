/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const prefixSums = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefixSums.push(prefixSums[i - 1] + nums[i]);
  }
  return prefixSums;
};

console.log(runningSum([1, 2, 3, 4]));
