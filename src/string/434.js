/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  const { length } = s;

  let count = 0;
  let isWord = false; // 避免有连续的空格，需要用一个标识来标记

  for (let i = 0; i < length; i++) {
    if (s[i] === ' ') {
      if (isWord) {
        count++;
      }
      isWord = false;
    } else {
      isWord = true;
    }
  }
  if (isWord) {
    count++;
  }

  return count;
};

console.log(countSegments('hello, my name is John'));
