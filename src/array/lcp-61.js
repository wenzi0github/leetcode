const check = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  const diffA = [];
  const diffB = [];

  let maxDay = 0;

  for (let i = 0; i < temperatureA.length - 1; i++) {
    diffA.push(check(temperatureA[i + 1], temperatureA[i]));
    diffB.push(check(temperatureB[i + 1], temperatureB[i]));
  }
  // console.log(diffA, diffB)
  for (let i = 0; i < diffA.length; i++) {
    if (diffA[i] == diffB[i]) {
      let j = i + 1;
      for (; j < diffA.length; j++) {
        if (diffA[j] != diffB[j]) {
          break;
        }
      }
      maxDay = Math.max(maxDay, j - i);
      i = j;
    }
  }

  return maxDay;
};

console.log(temperatureTrend([21, 18, 18, 18, 31], [34, 32, 16, 16, 17]));
// [5,10,16,-6,15,11,3]
console.log(temperatureTrend([5, 10, 16, -6, 15, 11, 3, 1], [16, 22, 23, 23, 25, 3, -16, -17]));
