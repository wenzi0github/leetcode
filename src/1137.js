/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const arr = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];
};
console.log(tribonacci(37));
