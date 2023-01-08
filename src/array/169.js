/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const { length } = nums;
  const half = Math.floor(length / 2);

  for (let i = 0; i < length; i++) {
    const count = (map.get(nums[i]) || 0) + 1;

    // console.log(half, count);

    if (count > half) {
      return nums[i];
    }
    map.set(nums[i], count);
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
