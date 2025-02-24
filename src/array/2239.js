/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let maxDis = Math.abs(nums[0]);
  let result = nums[0];

  for(let i=1; i<nums.length; i++) {
    const dis = Math.abs(nums[i]);
    if (dis < maxDis || (dis === maxDis && nums[i] > result)) {
      maxDis = dis;
      result = nums[i];
    }
  }
  return result;
};

console.log(findClosestNumber([2,1,1,-1,1000]))
