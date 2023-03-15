/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  // const location = new Map();
  const location = [];
  roads.forEach(([x, y]) => {
    if (!location[x]) {
      location[x] = {
        cur: x,
        next: [y],
      };
    } else {
      location[x].next.push(y);
    }

    if (!location[y]) {
      location[y] = {
        cur: y,
        next: [x],
      };
    } else {
      location[y].next.push(x);
    }
  });
  location.sort((a, b) => {
    return a.next?.length > b.next?.length ? -1 : 1;
  });
  let maxCount = 0;

  // console.log(location);
  for (let i = 0; i < location.length - 1; i++) {
    if (!location[i]) {
      continue;
    }
    for (let j = i + 1; j < location.length; j++) {
      if (!location[j]) {
        continue;
      }
      let len = location[i].next.length + location[j].next.length;
      if (location[i].next.includes(location[j].cur)) {
        len -= 1;
      }
      maxCount = Math.max(len, maxCount);

      // 越往后越小，如果两者的和小于maxCount-1，则再往后的值，就再也追不上maxCount了
      if (len < maxCount - 1) {
        break;
      }
    }
  }

  return maxCount;
};

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 5],
  ])
);
