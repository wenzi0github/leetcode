/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(' ');
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result.join(' ');
};
