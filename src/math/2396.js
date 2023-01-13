/**
 * 将n转为对应的进制
 * @param {number} n 要转换的数字
 * @param {number} to 进制
 */
const transformAndCheck = (n, to) => {
  const result = [];

  while (n) {
    result.push(n % to);
    n = Math.floor(n / to);
  }
  // return result;
  let i = 0;
  let j = result.length - 1;

  while (i < j) {
    if (result[i] !== result[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  // for (let i = 2; i <= n - 2; i++) {
  //   if (!transformAndCheck(n, i)) {
  //     return false;
  //   }
  // }

  // 其实全部都为false，没有在2~n-2的进制下，全都是回文的
  return false;
};
