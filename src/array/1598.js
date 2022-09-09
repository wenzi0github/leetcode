/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;

  const find = (logIndex = 0) => {
    if (logIndex >= logs.length) {
      return;
    }
    const item = logs[logIndex];
    if (item === './') {
      // depth not change
    } else if (item === '../') {
      depth = Math.max(depth - 1, 0);
    } else {
      depth++;
    }
    find(logIndex + 1);
  };
  find();

  return depth;
};
