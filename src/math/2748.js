/**
 * 获取两个数的最大公约数
 * @param {number} x
 * @param {number} y
 */
const gcd = (x, y) => {
  while (y) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = Number(nums[i].toString()[0]);
      const last = nums[j] % 10;

      if (gcd(first, last) === 1) count++;
    }
  }

  return count;
};
