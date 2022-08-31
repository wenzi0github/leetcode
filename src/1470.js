/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const j = n + i;
    result.push(nums[i], nums[j]);
  }

  return result;
};
console.log(shuffle([1, 2, 3, 4, 5, 6], 3));
