/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const unkownPositions = []; // 问号？所在的位置
  for (let i = 0; i < time.length; i++) {
    if (time[i] === '?') {
      unkownPositions.push(i);
    }
  }
};
