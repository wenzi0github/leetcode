/**
 * 解题思路：所有要添加的数不能超过limit，那么就把差值尽可能地大，直到limit，
 * 然后看最小需要多少个limit，比如差值为10，limit为3，那么得至少需要4个limit，
 * 才能覆盖差值。
 * 即向上取整。
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const sum = nums.reduce((prev, cur) => prev + cur, 0);
  const diff = Math.abs(sum - goal);

  if (diff === 0) {
    // 若正好相等，则不用添加
    return 0;
  }
  return Math.ceil(diff / limit);
};

console.log(minElements([1, -1, 1], 3, -4));
console.log(minElements([1, -10, 9, 1], 100, 0));
console.log(minElements([1, -10, 9, 1], 100, 1));
