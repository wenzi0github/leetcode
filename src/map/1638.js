/**
 * 判断两个字符串是否只差1个字母
 * @param {string} a
 * @param {string} b
 */
const check = (a, b) => {
  if (a.length !== b.length || a === b) {
    // 若长度不相等，则不比较
    // 若两个字符串相等，则任何位置都一样，肯定不会相差1个字母
    return false;
  }
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;

      if (count > 1) {
        // 此时已经有2个不相同的字符了，直接返回false
        return false;
      }
    }
  }
  return count === 1;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  const sMap = new Map(); // 所有的子串都存储起来，并存储其数量
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const str = s.substring(i, j);
      sMap.set(str, (sMap.get(str) || 0) + 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    for (let j = i + 1; j <= t.length; j++) {
      const str = t.substring(i, j);
      tMap.set(str, (tMap.get(str) || 0) + 1);
    }
  }

  let num = 0;
  for (const [str, count] of sMap) {
    for (const [tStr, tCount] of tMap) {
      if (str.length === tStr.length && check(str, tStr)) {
        num += count * tCount;
      }
    }
  }

  return num;
};

console.log(countSubstrings('aba', 'baba'));
console.log(countSubstrings('ab', 'bb'));
