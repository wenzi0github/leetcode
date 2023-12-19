/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  const { length } = s;
  let maxLen = 0;

  for (let i = 0; i < length - 1; i++) {
    if (s[i] === '0' && s[i + 1] === '1') {
      let count = 2;

      let begin = i - 1;
      let end = i + 2;

      while (begin >= 0 && end < length && s[begin] === '0' && s[end] === '1') {
        begin--;
        end++;
        count += 2;
      }
      maxLen = Math.max(count, maxLen);
    }
  }
  return maxLen;
};

console.log(findTheLongestBalancedSubstring('111'));
