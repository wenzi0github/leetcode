/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  const { length } = s;
  let count = 0;
  let i = 0;

  while (i < length) {
    if (s[i] === 'X') {
      i += 3;
      count++;
    } else {
      i++;
    }
  }

  return count;
};

console.log(minimumMoves('XXX'));
console.log(minimumMoves('XXOX'));
console.log(minimumMoves('OOOO'));
