/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const result = [];
  const { length } = arr;

  if (x <= arr[0]) {
    // x比arr中所有的数都小或等于
    let i = 0;
    while (i < length && i < k) {
      result.push(arr[i]);
      i++;
    }
    return result;
  }
  if (x >= arr[length - 1]) {
    // x greater or equal max val in arr
    let i = Math.max(length - k, 0); // 避免数组越界
    while (i < length) {
      result.push(arr[i]);
      i++;
    }
    return result;
  }
  let index = 0;
  let hasEqual = false; // x是否正好等于arr[i]中的数字
  for (let i = 0; i < length; i++) {
    // 1, 3, 6
    // x = 5, 此时 index = 2
    if (arr[i] >= x) {
      index = i;
      hasEqual = x === arr[i];
      break;
    }
  }
  let i = index - 1; // 向前移动的指针
  let j = hasEqual ? index + 1 : index; // 向后移动的指针

  while (j - i <= k) {
    if (
      i >= 0 &&
      (Math.abs(x - arr[i]) <= Math.abs(x - arr[j]) || j >= length)
    ) {
      i--;
    } else if (
      j < length &&
      (Math.abs(x - arr[i]) > Math.abs(x - arr[j]) || i < 0)
    ) {
      j++;
    }
    if (i < 0 && j >= length) {
      break;
    }
  }

  for (let kk = i + 1; kk < j; kk++) {
    result.push(arr[kk]);
  }

  return result;
};

/**
 * 测试用例
 * [1, 3, 6, 9] 1, 2
 * [1, 3, 6, 9] 1, 5
 * [1, 3, 6, 9] 1, -1
 * [1, 3, 6, 9] 1, 10
 * [1, 3, 6, 9] 4, 2
 * [0, 1, 2, 2, 2, 3, 6, 8, 8, 9], 5, 9
 */

console.log(findClosestElements([1, 3, 6, 9], 1, 10));

console.log(findClosestElements([0, 1, 2, 2, 2, 3, 6, 8, 8, 9], 1, 109));
