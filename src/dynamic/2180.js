const evenSet = new Set(); // 各个位置的数字加起来是偶数的，存储起来

const getSum = (num) => {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (evenSet.has(i)) {
      count++;
    } else {
      const sum = getSum(i);
      if ((sum & 1) === 0) {
        evenSet.add(i);
        count++;
      }
    }
  }

  return count;
};

console.log(countEven(1000));
// console.log(countEven(4));
