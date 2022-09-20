/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const set = new Set();
  const { length } = candidates;

  const sum = candidates.reduce((prev, cur) => prev + cur, 0);
  if (sum < target) {
    // return directly when all nums's sum less then target
    return result;
  }
  if (sum === target) {
    // return candidate when sum equal target
    return result.concat(candidates);
  }

  candidates.sort((a, b) => (a < b ? -1 : 1));

  const find = (leftTarget, start = 0, arr = []) => {
    console.log('start', start, arr, leftTarget);
    if (leftTarget < 0 || start > length) {
      return;
    }
    if (leftTarget === 0) {
      const str = arr.toString(); // candidates是有序的，因此数据一样的，顺序也是一样的
      if (!set.has(str)) {
        set.add(str);
        result.push(arr);
      }

      return;
    }
    for (let i = start; i < length; i++) {
      const item = candidates[i];

      find(leftTarget - item, i + 1, arr.concat(item));
    }
  };
  find(target);
  return result;
};

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5));
console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 24));
