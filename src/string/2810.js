/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'i') {
      result.reverse();
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
};
