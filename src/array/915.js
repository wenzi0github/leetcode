/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  const { length } = nums;
  let leftMax = []; // 包含 nums[i] 时，左侧数组的最大值
  let rightMin = []; // 包含 nums[i] 时，右侧数组的最小值

  leftMax[0] = nums[0];
  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
  }

  rightMin[length - 1] = nums[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  let leftLen = 1;
  while (leftLen < length) {
    if (leftMax[leftLen - 1] <= rightMin[leftLen]) {
      return leftLen;
    }
    leftLen++;
  }

  // 题目保证一定可以拆分数组，则逻辑不会走到这里
  return 0;
};

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12]));
console.log(partitionDisjoint([1, 2]));
console.log(partitionDisjoint([90, 47, 69, 10, 43, 92, 31, 73, 61, 97]));
