/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) {
    return n;
  }
  const sum = ((1 + n) * n) / 2;
  let x = 1;
  let prefixSum = 0;

  while (x <= n) {
    prefixSum += x;
    if (prefixSum === sum - prefixSum + x) {
      return x;
    }
    if (prefixSum > sum - prefixSum + x) {
      return -1;
    }

    x++;
  }
  return -1;
};
