/**
 * 连续n个相同的字符，子项有 (n+1)*n/2 个
 */

/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const { length } = s;
  const DIVISOR = 1000000007;

  if (length <= 1) {
    return length;
  }
  let sum = 0;
  let subChar = s[0];
  let subNum = 1; // 连续相同字符串的个数
  for (let i = 1; i < length; i++) {
    if (subChar === s[i]) {
      subNum++;
    } else {
      // 遇到不相等的字符，则计算刚才统计的数据
      const count = ((subNum + 1) * subNum) / 2;
      sum = (sum + count) % DIVISOR;
      subChar = s[i];
      subNum = 1;
    }
  }
  const count = ((subNum + 1) * subNum) / 2;
  sum = (sum + count) % DIVISOR;

  return sum;
};

console.log(countHomogenous('abbcccaa'));
console.log(countHomogenous('xy'));
console.log(countHomogenous('zzzzz'));
console.log(countHomogenous('a'));
