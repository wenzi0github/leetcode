/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  let arr = [];

  while (n) {
    arr.push(n % 2);

    n = Math.abs(n / 2);
  }
};
