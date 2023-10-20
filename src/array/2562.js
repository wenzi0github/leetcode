/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let sum = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let a = nums[start] + '';
    if (start < end) {
      a += nums[end];
    }
    start++;
    end--;

    sum += Number(a);
  }
  return sum;
};

console.log(findTheArrayConcVal([7, 52, 2, 4]));
console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
