const find = (start, arr, result, n, k) => {
  if (arr.length >= k) {
    // console.log('arr', arr);
    result.push(arr);
    return;
  }

  for (let i = start; i <= n; i++) {
    find(i + 1, arr.concat(i), result, n, k);
  }
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  find(1, [], result, n, k);

  return result;
};

console.log(combine(4, 3));
