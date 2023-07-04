/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = [];

  arr.forEach((item, index) => {
    result.push(fn(item, index));
  });

  return result;
};
