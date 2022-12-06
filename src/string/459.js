/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const { length } = s;

  let subStringLen = 1;
  while (subStringLen < length) {
    if (length % subStringLen) {
      return false;
    }

    let i = subStringLen;
    for (; i < length; i++) {
      if (s[i] !== s[i - subStringLen]) {
        break;
      }
    }
    if (i >= length) {
      return true;
    }

    // 找可以被length整除的数
    subStringLen++;
    while (subStringLen <= length / 2 && length % subStringLen) {
      subStringLen++;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));
console.log(repeatedSubstringPattern('abcabcabcabc'));
