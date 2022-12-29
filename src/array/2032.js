/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const map = new Map();
  const result = [];

  /**
   * 每个数组中的数字不能重复计数，因此先对每个数组去重，再计数
   */

  [...new Set(nums1)].forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  [...new Set(nums2)].forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  [...new Set(nums3)].forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  for (let [num, count] of map) {
    if (count >= 2) {
      result.push(num);
    }
  }
  return result;
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
