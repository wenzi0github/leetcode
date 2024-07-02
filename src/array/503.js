/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const { length } = nums;
  const result = new Array(length).fill(-1);

  for (let i = 0; i < length; i++) {
    let j = (i + 1) % length;

    while (j !== i) {
      if (nums[j] > nums[i]) {
        result[i] = nums[j];
        break;
      }

      j = (j + 1) % length;
    }
  }

  return result;
};

console.log(nextGreaterElements([5, 4, 3, 2, 1]));
