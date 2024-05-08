/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  // 滑动窗口
  const { length } = customers;
  let maxSum = 0;
  let sum = 0;
  let end = 0; // 当前滑动窗口的结束位置

  /**
   * 先默认开头的minutes全都是不生气，然后计算出整个时间段内满意的顾客
   */
  for (let i = 0; i < length; i++) {
    if (grumpy[i] === 0 || i < minutes) {
      sum += customers[i];
    }
  }
  maxSum = sum;
  end = minutes;

  /**
   * 从滑动窗口的结尾开始移动
   * 1. 若下一个要加入的时刻，当时是生气的，则改为不生气，同时将顾客数量添加到sum中；
   * 2. 将要从开头移出的时刻，若当时是生气的（这期间改成了不生气），现在要改回去，那么要将满意的顾客刨除；
   */
  while (end < length) {
    if (grumpy[end] === 1) {
      // 若之前是生气，现在改成不生气
      sum += customers[end];
    }
    if (grumpy[end - minutes] === 1) {
      // 若开头的位置本来就是生气，现在计算总和时，要去掉当时的顾客
      sum -= customers[end - minutes];
    }
    maxSum = Math.max(sum, maxSum);

    end++;
  }
  return maxSum;
};

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3));
