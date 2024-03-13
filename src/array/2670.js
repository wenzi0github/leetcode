/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
  const { length } = nums;
  const diff = [];
  const endDiff = []; // 从尾部往前算有多少个不同的元素，endDiff[i]表示[i,n-1]之间的不同元素

  const set = new Set();

  endDiff[length] = 0;
  for (let i = length - 1; i >= 0; i--) {
    set.add(nums[i]);
    endDiff[i] = set.size;
  }
  set.clear();

  for (let i = 0; i < length; i++) {
    set.add(nums[i]);
    const startCount = set.size;
    const endCount = endDiff[i+1];

    diff.push(startCount - endCount);
  }

  return diff;
};

console.log(distinctDifferenceArray([1,2,3,4,5]))
console.log(distinctDifferenceArray([3,2,3,4,2]))
