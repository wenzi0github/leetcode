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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  let subArr = [];
  let prevLcm = 0;
  let count = 0;

  for (let j = 0; j < nums.length; j++) {
    for (let i = j; i < nums.length; i++) {
      if (k % nums[i] === 0) {
        if (nums[i] === k) {
          count++;
        } else if (prevLcm === 0) {
          prevLcm = nums[i];
        } else {
          const curLcm = getLowestCommonMultiple(prevLcm, nums[i]);
          console.log('curLcm', curLcm, nums[i]);

          if (curLcm === k) {
            count++;
          }
        }
        console.log(nums[i], count);
        subArr.push(nums[i]);
      } else {
        subArr = [];
        prevLcm = 0;
      }
    }
  }

  return count;
};

console.log(subarrayLCM([3, 6, 2, 7, 1], 6));
