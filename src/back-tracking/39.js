/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  /**
   *
   * @param {number} leftTarget 剩余的数值
   * @param {number} start 开始检索的位置，为避免产生重复的数据，不用每次都从头查找
   */
  const find = (leftTarget, start = 0, arr = []) => {
    if (leftTarget < 0) {
      return;
    }
    if (leftTarget === 0) {
      result.push(arr);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      const item = candidates[i];

      if (item <= leftTarget) {
        // i这里，因为数据可以复用，不能加1
        find(leftTarget - item, i, arr.concat(item));
      }
    }
  };
  find(target);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
