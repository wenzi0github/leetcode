/**
 * 前后开始分别检索计算对应的位置，
 * 若前后缀对应不上，直接结束检索，
 * 前缀或后缀，单独一直寻找，直到不一样的字符；
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const { length } = s;

  if (length <= 1) {
    // 只有一个字符时，不能删除，因为前缀的下标和后缀的下标重叠了，题目要求不能重叠
    return length;
  }
  let prefixIndex = 0;
  let suffixIndex = length - 1;

  // 前缀下标要小于后缀的下标，同时前后缀的字符要一样
  while (prefixIndex < suffixIndex && s[prefixIndex] === s[suffixIndex]) {
    // 查找所有跟前缀一样的字符，并将下标定位到下一个不一样的字符上
    let i = prefixIndex + 1;
    while (i < suffixIndex && s[i] === s[prefixIndex]) {
      i++;
    }
    prefixIndex = i;

    // 查找所有跟后缀一样的字符，并将下标定位到下一个不一样的字符上
    i = suffixIndex - 1;
    while (i > prefixIndex && s[i] === s[suffixIndex]) {
      i--;
    }
    suffixIndex = i;
  }
  return suffixIndex - prefixIndex + 1;
};

console.log(minimumLength('ca'));
console.log(minimumLength('aaa'));
console.log(minimumLength('cabaabac'));
console.log(minimumLength('aabccabba'));
