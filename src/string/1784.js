/**
 * 连续的1，为一组，组数小于等于1时，返回true，否则返回false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  const { length } = s;

  if (length <= 2) {
    return true;
  }

  let oneSum = 0;

  for (let i = 1; i < length; i++) {
    if (s[i] === '0') {
      if (s[i - 1] === '1') {
        oneSum++;

        if (oneSum > 1) {
          // 若此时，组数已超过1个，则直接返回即可
          return false;
        }
      }
    }
  }
  if (s[length - 1] === '1') {
    // 若最后一个字符是1，则加1
    oneSum++;
  }
  return oneSum <= 1;
};
