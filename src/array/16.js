/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const { length } = nums;

  let sum = nums[0] + nums[1] + nums[2];

  if (length === 3) {
    return sum;
  }

  nums.sort((x, y) => (x <= y ? -1 : 1));
  sum = nums[0] + nums[1] + nums[2];

  if (target <= sum) {
    return sum;
  }

  let prevSum = sum;
  let i = 0;

  console.log(nums, sum);

  do {
    if (sum === target) {
      // 若正好等于target，直接返回
      return sum;
    }
    if (sum > target) {
      break;
    }
    prevSum = sum;
    sum = sum - nums[i] + nums[i + 3];
    console.log(i, prevSum, sum);
    i++;
  } while (i < length - 3);

  if (sum - target <= target - prevSum) {
    return sum;
  }
  return prevSum;
};
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
