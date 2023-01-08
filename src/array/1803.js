/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
  const { length } = nums;
  let count = 0;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const res = nums[i] ^ nums[j];
      if (res >= low && res <= high) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPairs([1, 4, 2, 7], 2, 6));
console.log(countPairs([9, 8, 4, 2, 1], 5, 14));
