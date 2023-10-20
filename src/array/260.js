/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }
  const result = [];
  for (const key in obj) {
    if (obj[key] === 1) {
      result.push(key);
    }
  }
  return result;
};


