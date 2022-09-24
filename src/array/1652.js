/**
 * https://leetcode.cn/problems/defuse-the-bomb/
 * 
 * 两个关键点：
 * 1. 计算sum时，不用每次都从头计算，只要知道要加哪个数，要去掉哪个数即可
 * 2. 因为是循环数组，注意下标的计算；
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const result = [];
  const { length } = code;

  if (k === 0) {
    for (let i = 0; i < length; i++) {
      result.push(0);
    }
    return result;
  }

  let sum = 0;
  let j = 1;
  let start = 0;
  let next = 0;
  if (k > 0) {
    for (let i = 1; i <= k; i++) {
      sum += code[i];
    }
    result.push(sum);

    start = 1;
    next = (k + 1) % length;
  } else {
    for (let i = length + k; i < length; i++) {
      sum += code[i];
    }
    result.push(sum);

    start = length + k;
    next = 0;
  }

  while (j < length) {
    sum = sum + code[next] - code[start];
    result.push(sum);

    start = (start + 1) % length;
    next = (next + 1) % length;
    j++;
  }
  return result;
};

console.log(decrypt([2, 4, 9, 3], -2));
console.log(decrypt([5, 7, 1, 4], 3));
