/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const { length } = arr;
  arr.sort((a, b) => (a < b ? -1 : 1));

  const excludeLen = length * 0.05; // length >=0 && length % 20==0，所以该变量一定是整数

  let sum = 0;
  for (let i = excludeLen; i < length - excludeLen; i++) {
    sum += arr[i];
  }
  // console.log(sum, length - excludeLen * 2, excludeLen);
  return sum / (length - excludeLen * 2);
};

console.log(trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]));
console.log(trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]));
console.log(
  trimMean([
    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2,
    3, 4,
  ])
);
