/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  const { length } = nums;
  let product = 1;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      // 只要有一个数字为0，则可以直接返回0
      return 0;
    }
    if (nums[i] < 0) {
      product *= -1;
    }
  }
  return product;
};

console.log(arraySign([-1, 1, -1, 1, -1]));
