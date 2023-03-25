/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  /**
   * 因为要删除的是连续数组，则只会存在3种情况，要么从最左侧开始删，要么从最右侧开始删，要么是中间的连续部分。
   * 
   * 1. 从0开始往右找，直到不是非递减数列；
   * 2. 从length-1开始往左找，直到不是飞递减数列；
   * 3. 从左侧数列的最右端开始，每次删除一个，然后查看是否是非递减数列；
   */
  const { length } = arr;
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  let minLen = length;

  let i = 1;
  for (; i < length; i++) {
    if (arr[i] < arr[i - 1]) {
      leftArrIndex = i - 1;
      break;
    }
  }
  if (i >= length) {
    // 本身就是非递减数列，不用删除任何元素
    return 0;
  }
  i = length - 2;
  for (; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      rightArrIndex = i + 1;
      break;
    }
  }
  if (i < 0) {
    // 本身是严格递减的，只能保留一个元素
    return length - 1;
  }

  while (leftArrIndex >= -1) {
    const leftNum = leftArrIndex >= 0 ? arr[leftArrIndex] : -1; // 往最左侧补充一个元素

    if (rightArrIndex - leftArrIndex - 1 > minLen) {
      // 若前后两个数列之间的距离已超过记录的最小长度，则没必要再往左移动了
      break;
    }

    let j = rightArrIndex;

    while (j < length) {
      const delCount = j - leftArrIndex - 1;

      if (delCount >= minLen) {
        // 当已经比记录的最小长度要长了，就没必要往后找了
        break;
      }
      if (arr[j] >= leftNum) {
        // 在右侧数列中找到了比左侧数列，大于等于的值，可以停止寻找了
        minLen = Math.min(minLen, delCount);
        // console.log(minLen, leftArrIndex, j);
        break;
      }
      j++;
    }
    // 找到后也没找到
    minLen = Math.min(minLen, length - leftArrIndex - 1);
    // 左侧数列的最右端向左移动1位
    leftArrIndex--;
  }

  return minLen;
};

// console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]));
console.log(findLengthOfShortestSubarray([16, 10, 0, 3, 22, 1, 14, 7, 1, 12, 15]));
