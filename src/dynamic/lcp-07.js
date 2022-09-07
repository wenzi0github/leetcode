/**
 * https://leetcode.cn/problems/chuan-di-xin-xi/
 */

/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const map = new Map();
  const result = [];

  relation.forEach(([from, to]) => {
    map.set(from, (map.get(from) || []).concat(to));
  });

  /**
   *
   * @param {number} from 出发地
   * @param {number[]} location 目的地
   */
  const find = (from, location = []) => {
    const list = map.get(from) ?? [];

    if (location.length >= k + 1) {
      // 超过轮转次数了
      if (from === n - 1) {
        const str = location.toString();
        if (!result.includes(str)) {
          result.push(str);
        }
      }
      return;
    }

    list.forEach((item) => {
      find(item, location.concat(item));
    });
  };
  find(0, [0]);
  // console.log(result);
  return result.length;
};

console.log(
  numWays(
    5,
    [
      [0, 2],
      [2, 1],
      [3, 4],
      [2, 3],
      [1, 4],
      [2, 0],
      [0, 4],
    ],
    3
  )
);

console.log(
  numWays(
    3,
    [
      [0, 2],
      [2, 1],
    ],
    2
  )
);
