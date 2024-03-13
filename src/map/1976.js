/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  let minTime = Number.MAX_SAFE_INTEGER;
  const map = new Map(); // 存储地图
  const times = new Map();

  const LOCAL = 10e9 + 7;

  roads.forEach(([u, v, time]) => {
    const ulist = map.get(u) || [];
    const vlist = map.get(v) || [];

    map.set(u, ulist.concat({ node: v, time }));
    map.set(v, vlist.concat({ node: u, time }));
  });

  let resultTime = Number.MAX_SAFE_INTEGER;
  let resultCount = 0;
  const find = (node = 0, sum = 0, paths = [0]) => {
    if (node === n - 1) {
      const aa = ((times.get(sum) || 0) + 1) % LOCAL;
      times.set(sum, aa);
      minTime = Math.min(sum, minTime);

      console.log(sum, aa, resultTime);

      if (sum < resultTime) {
        resultTime = sum;
        resultCount = aa;
      } else if (sum === resultTime) {
        resultCount = aa;
      }

      return;
    }
    console.log(node, sum, paths);

    const list = map.get(node);
    if (Array.isArray(list) && list.length) {
      list.forEach((aa) => {
        const newSum = sum + aa.time;
        if (newSum < minTime && !paths.includes(aa.node)) {
          find(aa.node, newSum, paths.concat(aa.node));
        }
      });
    }
  };
  find();
  return resultCount;
};

console.log(
  countPaths(7, [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ])
);
