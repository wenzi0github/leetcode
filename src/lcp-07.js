/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const map = new Map();

  relation.forEach((from, to) => {
    map.set(from, (map.get(from) || []).concat(to));
  });

  /**
   *
   * @param {number} from 出发地
   * @param {number} to 目的地
   * @param {number} cur 当前轮转次数
   */
  const find = (from, to, cur = 0) => {
    const list = map.get(from);

    if (cur >= k) {
      // 超过轮转次数了
      return;
    }
    if (cur === k - 1) {
    }

    list.forEach((item) => {
      find(item, to, cur + 1);
    });
  };
  find(0, relation.length - 1, 0);
};
