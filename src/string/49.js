/**
 * 判断两个字符串包含的字符是否一样，不在乎顺序
 * @param {string} str1
 * @param {string} str2
 */
const checkTwoStringNormal = (str1, str2) => {
  const { length } = str1;

  if (length !== str2.length) {
    return false;
  }
  const obj = {}; // 存储每个字符的个数
  for (let i = 0; i < length; i++) {
    const c = str2[i];

    obj[c] = (obj[c] || 0) + 1;
  }
  for (let i = 0; i < length; i++) {
    const c = str2[i];
    if (obj[c]) {
      obj[c]--;
    }
    if (!obj[c] || obj[c] <= 0) {
      // 若 str2 字符串中的字符，在str1中不存在，或者str2中的该字符太多，都是没匹配上
      return false;
    }
  }
  return true;
};

console.log(checkTwoStringNormal('aabbcc', 'bbbacc'));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
};
