const fibArr = [1, 1];

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const MOD = 1000000007;

  if (fibArr[n]) {
    return fibArr[n];
  }

  for (let i = 2; i <= n; i++) {
    fibArr[i] = (fibArr[i - 1] + fibArr[i - 2]) % MOD;
  }
  return fibArr[n];
};
