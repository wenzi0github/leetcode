/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    singleNum ^= nums[i];
  }
  return singleNum;
};

console.log(singleNumber([2, 2, 1]));
