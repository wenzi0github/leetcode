/**
 * 3的当前次幂，要比之前所有数的和都要大，而且题目要求必须不同的3的幂，
 * 因此从最接近于n的3的幂还是往下找
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  // 最后一个10000000，是为了可以在 findlessMaxNum中选中4782969
  const thirdPow = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 10000010];
  const mySet = new Set();
  thirdPow.forEach((item) => {
    mySet.add(item);
  });

  // 从thirdPow里查找小于nn的最大的那个数
  const findLessMaxNum = (nn) => {
    let prev = -1;
    for (let val of mySet) {
      // console.log(prev, val);
      if (val >= nn) {
        mySet.delete(prev);
        return prev;
      }
      prev = val;
    }
    return -1;
  };

  while (n > 0) {
    // console.log(n);
    if (mySet.has(n)) {
      return true;
    }
    const cur = findLessMaxNum(n);
    if (cur < 0) {
      return false;
    }
    // console.log(n, cur);
    n -= cur;
    // break;
  }
  return false;
};
// console.log(checkPowersOfThree(12));
// console.log(checkPowersOfThree(91));
// console.log(checkPowersOfThree(21));
console.log(checkPowersOfThree(6378022));
console.log(checkPowersOfThree(10000000));
