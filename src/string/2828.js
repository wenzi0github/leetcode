/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  if (words.length !== s.length) {
    return false;
  }
  let firstWord = '';
  words.forEach((word) => {
    firstWord += word[0];
  });
  return firstWord === s;
};
