/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  if (num <= 10) {
    return num;
  }
  const arr = [];
  let tempNum = num;

  while (tempNum) {
    arr.push(tempNum % 10);
    tempNum = Math.floor(tempNum / 10);
  }
  arr.reverse();
  const { length } = arr;
  const dp = []; // 该位置之后，比arr[i]大的最大值，若没有，则为-1

  dp[length - 1] = { num: -1, index: -1 }; // 最后一个数之后，没有更大的数，则为-1
  for (let i = length - 2; i >= 0; i--) {
    let maxValue = -1;
    let maxIndex = -1;
    if (arr[i + 1] > dp[i + 1].num) {
      maxValue = arr[i + 1];
      maxIndex = i + 1;
    } else {
      maxValue = dp[i + 1].num;
      maxIndex = dp[i + 1].index;
    }
    let j = maxValue;
    while (j < length && arr[j] === maxValue) {
      j++;
    }
    if (maxValue > arr[i]) {
      dp[i] = { num: maxValue, index: j - 1 };
    } else {
      dp[i] = { num: -1, index: -1 }; // 没有比arr[i]更大的数
    }
  }
  // console.log(dp);
  for (let i = 0; i < length; i++) {
    if (dp[i].index >= 0) {
      [arr[i], arr[dp[i].index]] = [arr[dp[i].index], arr[i]];
      return parseInt(arr.join(''), 10);
    }
  }

  // 若num所有位置上的数都是降序，如9876，则原样返回
  return num;
};

// console.log(maximumSwap(2736));
// console.log(maximumSwap(9973));
// console.log(maximumSwap(0));
// console.log(maximumSwap(20));
// console.log(maximumSwap(98368));
console.log(maximumSwap(1993));
console.log(maximumSwap(1995999));
