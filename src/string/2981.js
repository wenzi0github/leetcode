/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const map = new Map();
  const { length } = s;

  for (let i = 0; i < length; i++) {
    let str = '';

    for (let j = i; j < length; j++) {
      if (s[j] === s[i]) {
        str += s[j];
        map.set(str, (map.get(str) || 0) + 1);
      } else {
        break;
      }
    }
  }

  let maxCount = 0;
  let maxStr = '';
  for (const [key, value] of map) {
    if (value >= 3) {
      // console.log(key, value);

      if (key.length > maxStr.length) {
        // 若字符串更长，则优先使用更长的字符串
        maxStr = key;
        maxCount = value;
      } else if (key.length === maxStr.length && value > maxCount) {
        // 若字符串长度一样，则更多的优先
        maxStr = key;
        maxCount = value;
      }
    }
  }
  if (maxStr) {
    return maxStr.length;
  }
  return -1;
};

console.log(maximumLength('cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde'));
