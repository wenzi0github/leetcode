/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => {
    return a < b ? -1 : 1;
  });

  const prefixSums = [0];
  nums.forEach((num, index) => {
    prefixSums.push(prefixSums[index] + num);
  });

  return queries.map((query) => {
    let i = 1;
    for (; i < prefixSums.length; i++) {
      if (prefixSums[i] > query) {
        break;
      }
    }
    return i - 1;
  });
};

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
console.log(answerQueries([2, 3, 4, 5], [1, 2]));
