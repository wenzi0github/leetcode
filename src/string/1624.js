/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const map = new Map(); // 存储字符第一次出现的下标，若中间再次出现的，只比较距离，但不再存储
  const { length } = s;

  if (length <= 1) {
    return -1;
  }
  let maxChildLen = -1;
  for (let i = 0; i < length; i++) {
    const firstIndex = map.get(s[i]);
    if (typeof firstIndex === 'number') {
      // 若s[i]之前已出现过，则比较两者之间的距离
      maxChildLen = Math.max(maxChildLen, i - firstIndex - 1);
    } else {
      // 存储s[i]第一次出现的下标
      map.set(s[i], i);
    }
  }
  return maxChildLen;
};

console.log(maxLengthBetweenEqualCharacters('ss'));
