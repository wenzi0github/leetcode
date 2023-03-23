/**
 * 检测数组是否是等差数列
 * @param {number[]} arr
 * @returns
 */
const check = (arr) => {
  const { length } = arr;
  if (length <= 2) {
    return true;
  }
  arr.sort((a, b) => (a < b ? -1 : 1));
  const diff = arr[1] - arr[0];

  for (let i = 2; i < length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  return l.map((left, index) => {
    const right = r[index];
    const arr = [];

    for (let i = left; i <= right; i++) {
      arr.push(nums[i]);
    }
    return check(arr);
  });
};
