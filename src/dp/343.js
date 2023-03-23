const split = (n, k) => {
  const arr = [];

  while (n) {
    const a = Math.ceil(n / k);
    arr.push(a);
    k--;
    n -= a;
  }
  return arr;
};

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) {
    return 1;
  }
  let maxRes = 1;
  for (let i = 2; i <= n - 1; i++) {
    const arr = split(n, i);
    const aa = arr.reduce((prev, cur) => prev * cur, 1);
    // console.log(i, arr, aa);
    if (aa < maxRes) {
      break;
    } else {
      maxRes = aa;
    }
    // maxRes = Math.max(maxRes, aa);
  }
  return maxRes;
};

console.log(integerBreak(58));
