/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  let sum2 = 0;

  for (let i = 0; i < nums.length; i++) {
    sum2 += parseInt(
      nums[i]
        .toString()
        .split('')
        .reduce((acc, curr) => acc + parseInt(curr), 0)
    );
  }

  return Math.abs(sum - sum2);
};
