/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let j = i;

    while (j) {
      count += j & 1;
      j >>>= 1;
    }
    if (count === k) {
      sum += nums[i];
    }
  }

  return sum;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2));
