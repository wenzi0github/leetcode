/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0;
  let product = 1;

  while (n) {
    const c = n % 10;
    sum += c;
    product *= c;

    n = Math.floor(n / 10);
  }

  return product - sum;
};
