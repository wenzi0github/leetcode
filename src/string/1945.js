/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  const aCode = 'a'.charCodeAt(0);
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let curCode = s.charCodeAt(i) - aCode + 1;

    while (curCode) {
      sum += curCode % 10;
      curCode = Math.floor(curCode / 10);
    }
  }

  k--; // 前面已经加过一次了，这里直接先减1
  while (k) {
    k--;

    if (sum < 10) {
      // 若sum已经小于10，再多次的循环，结果也是不变的
      break;
    }

    let curCode = sum;
    sum = 0;
    while (curCode) {
      sum += curCode % 10;
      curCode = Math.floor(curCode / 10);
    }
  }

  return sum;
};

console.log(getLucky('zbax', 2));
console.log(getLucky('iiii', 1));
console.log(getLucky('leetcode', 2));
console.log(getLucky('leetcode', 10));
