/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const { length } = nums;
  const leftMinNum = [nums[0]]; // 小于等于i中的最小值
  const rightMinNum = []; // 大于等于i中的最小值

  for (let i = 1; i < length; i++) {
    leftMinNum[i] = Math.min(nums[i], leftMinNum[i - 1]);
  }
  rightMinNum[length - 1] = nums[length - 1];

  let minSum = 3000; // 每个值最高50，最多50个元素
  for (let i = length - 2; i >= 0; i--) {
    rightMinNum[i] = Math.min(nums[i], rightMinNum[i + 1]);
  }
  for (let i = 1; i < length - 1; i++) {
    if (leftMinNum[i - 1] < nums[i] && rightMinNum[i + 1] < nums[i]) {
      const sum = leftMinNum[i - 1] + nums[i] + rightMinNum[i + 1];
      minSum = Math.min(minSum, sum);
    }
  }

  return minSum === 3000 ? -1 : minSum;
};

console.log(minimumSum([5, 4, 8, 7, 10, 2]));
