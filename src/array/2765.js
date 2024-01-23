/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  const arr = []; // 前后两个数字的差值
  let max = -1;

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    arr.push(diff);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      let m = 0;
      let j = i;
      for (; j < arr.length; j++) {
        if (arr[j] !== (-1) ** m) {
          break;
        }
        m++;
      }
      max = Math.max(max, j - i + 1);
    }
  }

  return max;
};

console.log(alternatingSubarray([2, 3, 4, 3, 4]));
console.log(alternatingSubarray([4, 5, 6]));
console.log(alternatingSubarray([5, 4, 3]));
console.log(alternatingSubarray([31, 32, 31, 32, 33]));
