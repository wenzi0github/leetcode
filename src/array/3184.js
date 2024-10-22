/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  const { length } = hours;
  let count = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        count++;
      }
    }
  }

  return count;
};

console.log(countCompleteDayPairs([12, 12, 30, 24, 24]));
