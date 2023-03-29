/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const nums = [1, 1, 1, 1, 1];

  for (let i = 1; i < n; i++) {
    for (let j = nums.length - 2; j >= 0; j--) {
      nums[j] += nums[j + 1];
    }
  }
  return nums.reduce((prev, cur) => prev + cur, 0);
};

for (let i = 1; i < 5; i++) {
  console.log(i, countVowelStrings(i));
}
