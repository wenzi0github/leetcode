/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
  let count = 0;

  // 两者没有交集
  if (leaveAlice < arriveBob || leaveBob < arriveAlice) {
    return count;
  }
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const arrive = arriveAlice >= arriveBob ? arriveAlice : arriveBob;
  const leave = leaveAlice <= leaveBob ? leaveAlice : leaveBob;

  const [arriveMonth, arriveDay] = arrive.split('-').map(Number);
  const [leaveMonth, leaveDay] = leave.split('-').map(Number);

  // 开始和结束的月份在同一个月
  if (arriveMonth === leaveMonth) {
    return leaveDay - arriveDay + 1;
  }

  // console.log(arriveMonth, arriveDay, leaveMonth, leaveDay);

  count += daysInMonth[arriveMonth] - arriveDay + 1; // 起始那月的剩余天数

  // 中间的月份
  for (let i = arriveMonth + 1; i <= leaveMonth - 1; i++) {
    count += daysInMonth[i];
  }

  count += leaveDay; // 结束那月的天数

  return count;
};

// console.log(countDaysTogether('08-15', '08-18', '08-16', '08-19'));
