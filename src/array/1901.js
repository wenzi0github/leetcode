/**
 * 判断[a,b]是否是比周围的4个元素都大
 * @param {number[][]} mat 矩阵
 * @param {number} a
 * @param {number} b
 */
const checkCenterIsMax = (mat, a, b) => {
  const arr = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  const row = mat.length;
  const col = mat[0].length;

  for (let i = 0; i < arr.length; i++) {
    const nextX = a + arr[i].x;
    const nextY = b + arr[i].y;

    let cur = -1;
    if (nextX >= 0 && nextX < row && nextY >= 0 && nextY < col) {
      cur = mat[nextX][nextY];
    }
    if (cur > mat[a][b]) {
      // 当前方位的数，比中心位置的大，则直接返回false
      return false;
    }
  }
  return true;
};

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  const row = mat.length;
  const col = mat[0].length;

  // if (row === 1) {
  //   // 只有1行
  //   if (col === 1 || mat[0][0] > mat[0][1]) {
  //     // 只有1个元素
  //     return [0, 0];
  //   }
  //   if (mat[0][col - 1] > mat[0][col - 2]) {
  //     return [0, col - 1];
  //   }

  //   for (let j = 1; j < col - 1; j++) {
  //     if (mat[0][j] > mat[0][j - 1] && mat[0][j] > mat[0][j + 1]) {
  //       return [0, j];
  //     }
  //   }
  // }
  // if (col === 1) {
  //   // 只有1列
  //   if (mat[0][0] > mat[1][0]) {
  //     return [0, 0];
  //   }
  //   if (mat[row - 1][0] > mat[row - 2][0]) {
  //     return [row - 1, 0];
  //   }

  //   for (let i = 1; i < row - 1; i++) {
  //     if (mat[i][0] > mat[i - 1][0] && mat[i][0] > mat[i + 1][0]) {
  //       return [i, 0];
  //     }
  //   }
  // }
  // // 判断是否是最后一个
  // if (checkCenterIsMax(mat, row - 1, col - 1)) {
  //   return [row - 1, col - 1];
  // }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (checkCenterIsMax(mat, i, j)) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};
