/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  if (s.length < target.length) {
    // 一定组不成target
    return 0;
  }

  /**
   * 把 s 中的所有字符放到map，每次形成副本时，对应的字符的数量减1，
   * 直到某个字符为0或者不存在，返回结果；
   */
  const sourceMap = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    sourceMap.set(s[i], (sourceMap.get(s[i]) || 0) + 1);
  }

  while (count <= s.length) {
    for (let i = 0; i < target.length; i++) {
      const num = sourceMap.get(target[i]);
      // console.log(target[i], num);
      if (!num || num < 0) {
        // 若该字符不存在，或者已经为0，已经无法再继续拼接，直接return即可
        return count;
      }
      sourceMap.set(target[i], num - 1);
    }
    count++;
  }

  // 极端情况，target只有一个字符，s全是target的字符组成
  return count;
};

console.log(rearrangeCharacters('ilovecodingonleetcode', 'code'));
console.log(rearrangeCharacters('abcba', 'abc'));
console.log(rearrangeCharacters('abbaccaddaeea', 'aaaaa'));
