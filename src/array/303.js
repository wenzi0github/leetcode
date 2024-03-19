/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.dp = []; // 从0到i-1的和

  this.dp[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    this.dp[i] = this.dp[i - 1] + nums[i - 1];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.dp[right + 1] - this.dp[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
