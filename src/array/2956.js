/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const answer = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) {
      count++;
    }
  }
  answer[0] = count;

  count = 0;
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      count++;
    }
  }
  answer[1] = count;

  return answer;
};
