/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
  if (nums.length === 1) {
    // 若只有一个元素，肯定满足要求
    return 1;
  }

  const map = new Map();

  nums.forEach((num, index) => {
    map.set(num, (map.get(num) || []).concat(index));
  });
  // console.log(map);
  let maxLen = 1;
  for (const [_, value] of map) {
    let left = 0;
    let right = 1;

    while (right < value.length) {
      if (right === value.length - 1 || value[right] - value[left] - (right - left + 1) > k) {
        maxLen = Math.max(maxLen, right - left + 1);

        // 重置，重新移动
        left++;
        right = left + 1;
        continue;
      }
      right++;
    }
    // maxLen = Math.max(maxLen, right - left);
  }
  return maxLen;
};

console.log(longestEqualSubarray([1, 3, 2, 3, 1, 3]));
console.log(longestEqualSubarray([1, 1, 2, 2, 1, 1], 2));
