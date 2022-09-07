/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
  let sum = 1;
  let minutes = 1;

  while (sum < n) {
    sum <<= 1;
    minutes++;
  }

  return minutes;
};

console.log(leastMinutes(2));
console.log(leastMinutes(3));
console.log(leastMinutes(4));

