/**
 * 获取该坐标一圈的数据
 * @param {number[][]} img
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const getAroundAvg = (img, x, y) => {
  const m = img.length;
  const n = img[0].length;
  const location = [[0,1],[0,-1],[-1,0],[1,0],[1,1],[1,-1],[-1,1],[-1,-1]];

  let sum = img[x][y];
  let count = 1;
  for (let i = 0; i < location.length; i++) {
    const nextx = x + location[i][0];
    const nexty = y + location[i][1];

    if (nextx < 0 || nexty < 0 || nextx >= m || nexty >= n) {
      continue;
    }
    sum += img[nextx][nexty];
    count += 1;
  }
  return Math.floor(sum / count);
}

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  const m = img.length;
  const n = img[0].length;

  if (m === 1 && n===1) {
    return img;
  }
  const result = [];

  for(let i=0; i<m; i++) {
    if (!result[i]) {
      result[i] = [];
    }
    for (let j=0; j<n; j++) {
      result[i][j] = getAroundAvg(img, i, j);
    }
  }
  return result;
};

console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]));
