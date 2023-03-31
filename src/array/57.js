// 判断两个区间是否有重叠
const check = (arr1, arr2) => {
  if (
    (arr2[0] >= arr1[0] && arr2[0] <= arr1[1]) ||
    (arr2[1] >= arr1[0] && arr2[1] <= arr1[1]) ||
    (arr1[0] >= arr2[0] && arr1[0] <= arr2[1]) ||
    (arr1[1] >= arr2[0] && arr1[1] <= arr2[1])
  ) {
    return true;
  }
  return false;
};

// 两个区间进行合并，这里默认两个区间有重叠
const merge = (arr1, arr2) => {
  return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const { length } = intervals;
  if (length <= 0) {
    return [newInterval];
  }
  const result = [];

  if (newInterval[1] < intervals[0][0]) {
    // 新区间的最大值比数组中的最小值还小，肯定无法重叠
    return [newInterval].concat(intervals);
  }
  if (newInterval[0] > intervals[length - 1][1]) {
    return intervals.concat([newInterval]);
  }

  for (let i = 0; i < length; i++) {
    if (check(intervals[i], newInterval)) {
      let arr = merge(intervals[i], newInterval);

      // 判断 intervals 后面的区间是否有跟新区间重叠的
      let j = i + 1;
      while (j < length && check(intervals[j], arr)) {
        arr = merge(intervals[j], arr);
        j++;
      }
      i = j - 1;
      result.push(arr);
    } else {
      // 没有重叠，直接使用之前的区间
      result.push(intervals[i]);

      if (i < length - 1 && newInterval[0] > intervals[i][1] && newInterval[1] < intervals[i + 1][0]) {
        result.push(newInterval);
      }
    }
  }

  return result;
};

console.log(
  insert(
    [
      [1, 2],
      [10, 12],
    ],
    [3, 5]
  )
);
