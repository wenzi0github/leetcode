/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let count = 0;

  nums.sort((a, b) => (a < b ? -1 : 1));

  const find = (sum = 0, path = 0) => {
    console.log(path, sum);
    // if (path >= nums.length) {
    //   return;
    // }
    for (let i = 0; i < nums.length; i++) {
      const newSum = nums[i] + sum;

      if (newSum > target) {
        return;
      }
      if (newSum === target) {
        count++;
        console.log('count', count);
        return;
      }
      find(newSum, path + 1);
    }
  };
  find();

  return count;
};

console.log(combinationSum4([2, 1, 3], 35));
