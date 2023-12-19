/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const row = heights.length;
  const col = heights[0].length;

  if (row == 1 && col === 1) {
    return 0;
  }
  const MAX_EFFORT = 1e6;
  let minEffort = MAX_EFFORT;
  const directs = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
  ];

  /**
   *
   * @param {number} curX 当前节点的x坐标
   * @param {number} curY 当前节点的y坐标
   * @param {number} prevHeight 上个节点的高度
   * @param {number} curPathMaxEffort 当前路径到目前为止的最大高度差
   * @param {string[]} visited 当前路径中已访问过的节点
   */
  const find = (curX, curY, prevHeight, curPathMaxEffort, visited) => {
    if (curX === row - 1 && curY === col - 1) {
      console.log('curPathMaxEffort', visited, curPathMaxEffort);

      minEffort = Math.min(minEffort, curPathMaxEffort);
      return;
    }
    if (curX !== 0 || curY !== 0) {
      const aa = Math.abs(heights[curX][curY] - prevHeight);
      curPathMaxEffort = Math.max(aa, curPathMaxEffort);

      console.log(curX, curY, heights[curX][curY], prevHeight, aa, curPathMaxEffort);

      if (curPathMaxEffort >= minEffort) {
        // 是查找高度差最小的路径，若到当前节点已超过历史记录的最小值，则停止查找
        // return;
      }
    }
    directs.forEach(({ x, y }) => {
      const nextX = curX + x;
      const nextY = curY + y;

      if (nextX < 0 || nextY < 0 || nextX >= row || nextY >= col || visited.includes(`${nextX}-${nextY}`)) {
        return;
      }
      find(nextX, nextY, heights[curX][curY], curPathMaxEffort, visited.concat(`${nextX}-${nextY}`));
    });
  };
  find(0, 0, 0, 0, [`0-0`]);

  return minEffort;
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);
