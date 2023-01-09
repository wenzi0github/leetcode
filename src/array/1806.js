/**
 * 判断数组中的下标是否与值相等
 * @param {number} arr
 */
const check = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  do {
    const temp = [];

    for (let i = 0; i < n; i++) {
      const num = i % 2 ? arr[n / 2 + (i - 1) / 2] : arr[i / 2];
      temp[i] = num;
    }
    arr = temp;
    count++;
    // console.log(count, arr);
  } while (!check(arr) && count < 1000);
  return count;
};

for (let i = 2; i <= 100; i += 2) {
  console.log(i, reinitializePermutation(i));
}
