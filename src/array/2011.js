/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let sum = 0;

  operations.forEach((item) => {
    if (item[1] === '+') {
      sum += 1;
    } else {
      sum -= 1;
    }
  });

  return sum;
};

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
