/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const map = new Map();
  const visited = new Set(); // 已经访问过的节点
  const running = [];

  if (source === destination) {
    return true;
  }

  if (!edges.length) {
    return false;
  }

  edges.forEach((item) => {
    map.set(item[0], (map.get(item[0]) || []).concat(item[1]));
    map.set(item[1], (map.get(item[1]) || []).concat(item[0]));
  });
  // console.log('map', map);

  running.push(source);
  visited.add(source);

  while (running.length) {
    const first = running.shift();
    // console.log('first', first);

    const list = map.get(first) || [];
    for (let i = 0; i < list.length; i++) {
      // console.log('list[i]', list[i]);
      if (list[i] === destination) {
        // 若当前节点正好是终点，直接结束
        return true;
      }

      // 只有没有访问过的节点，才能继续访问，避免无限重复访问
      if (!visited.has(list[i])) {
        visited.add(list[i]);
        running.push(list[i]);
      }
    }
  }

  return false;
};

// console.log(
//   validPath(
//     3,
//     [
//       [0, 1],
//       [1, 2],
//       [2, 0],
//     ],
//     0,
//     2
//   )
// );

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
console.log(
  validPath(
    10,
    [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    5,
    9
  )
);

console.log(
  validPath(
    10,
    [
      [0, 7],
      [0, 8],
      [6, 1],
      [2, 0],
      [0, 4],
      [5, 8],
      [4, 7],
      [1, 3],
      [3, 5],
      [6, 5],
    ],
    7,
    5
  )
);
