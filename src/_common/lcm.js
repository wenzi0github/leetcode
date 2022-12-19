/**
 * 获取两个数的最小公倍数
 * @param {number} a
 * @param {number} b
 */
const getLowestCommonMultiple = (a, b) => {
  const s = a * b;

  if (a < b) {
    [b, a] = [a, b];
  }

  let temp = a % b;
  while (temp) {
    a = b;
    b = temp;
    temp = a % b;
  }
  return s / b;
};

console.log(getLowestCommonMultiple(2, 3));
console.log(getLowestCommonMultiple(2, 6));
