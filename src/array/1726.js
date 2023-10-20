/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
  const set = new Set(nums);
  const { length } = nums;
  let num = 0;

  for(let i=0; i<length; i++) {
    for(let j=length-1; j>i; j--) {
      const aa = nums[i] * nums[j];

      for(let k = i+1; k<j; k++) {
        if (nums[k] > aa) {
          // 若当前数字比乘积要大，直接返回
          continue;
        }
        const c = aa / nums[k];
        if (set.has(c)) {
          num++;
        }
      }
    }
  }
  return num;
};