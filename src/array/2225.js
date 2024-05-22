/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const map = new Map();
  const result = [[], []];

  matches.forEach(([winner, loser]) => {
    map.set(loser, (map.get(loser) || 0) + 1);
    map.set(winner, map.get(winner) || 0);
  });

  for (const [key, value] of map) {
    if (value < 2) {
      result[value].push(key);
    }
  }
  result[0].sort((x, y) => (x <= y ? -1 : 1));
  result[1].sort((x, y) => (x <= y ? -1 : 1));

  return result;
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
