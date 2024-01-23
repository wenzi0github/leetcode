/**
 * 检查前两轮是否有满分的
 * @param {number} index 当前轮次
 * @param {number[]} arr 分数
 */
const checkHasTenScore = (index, arr) => {
  if (index === 0) {
    return false;
  }
  if (index === 1 || arr[index - 1] === 10) {
    return arr[index - 1] === 10;
  }
  return arr[index - 2] === 10;
};

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < player1.length; i++) {
    if (checkHasTenScore(i, player1)) {
      sum1 += player1[i] * 2;
    } else {
      sum1 += player1[i];
    }

    if (checkHasTenScore(i, player2)) {
      sum2 += player2[i] * 2;
    } else {
      sum2 += player2[i];
    }
  }
  if (sum1 === sum2) {
    return 0;
  }
  return sum1 > sum2 ? 1 : 2;
};
