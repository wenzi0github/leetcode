/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const result = [];
  const { length } = target;

  if (length === 0) {
    return result;
  }
  let curListNum = 1; // list数组当前的数字
  for (let i = 0; i < length; i++) {
    const num = target[i];

    if (num > curListNum) {
      // 若当前数字比数组中当前的数字要大
      const tempCurListNum = curListNum;
      let j = num - tempCurListNum;
      while (j--) {
        result.push('Push');
        curListNum++;
      }
      j = num - tempCurListNum;
      while (j--) {
        result.push('Pop');
      }
    }
    result.push('Push');
    curListNum++;
  }

  return result;
};

console.log(buildArray([1, 3], 3));
console.log(buildArray([1, 2, 3], 3));
console.log(buildArray([1, 2], 4));
console.log(buildArray([2, 3, 4], 4));
