/**
* @param {number} x
* @param {number} y
* @param {number[][]} points
* @return {number}
*/
var nearestValidPoint = function(x, y, points) {
  let index = -1;
  let minDis = 20010;

  for(let i=0; i<points.length; i++) {
      const [px, py] = points[i];
      if (px === x || py === y) {
          const curDis = Math.abs(x-px) + Math.abs(py - y);
          if (curDis < minDis) {
            minDis = curDis;
            index = i;
          }
      }
  }
  return index;
};