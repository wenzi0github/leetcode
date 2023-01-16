/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const oneArr = []; // 存储有1的位置
  const result = [];

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === '1') {
      oneArr.push(i);
    }
  }
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    oneArr.forEach((location) => {
      sum += Math.abs(location - i);
    });
    result.push(sum);
  }

  return result;
};

console.log(minOperations('001011'));
