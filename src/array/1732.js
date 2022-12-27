/**
 * https://leetcode.cn/problems/find-the-highest-altitude/
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let maxHeight = 0;
  let prevHeight = 0;

  gain.forEach((diff) => {
    prevHeight = prevHeight + diff;
    maxHeight = Math.max(maxHeight, prevHeight);
  });
  return maxHeight;
};
