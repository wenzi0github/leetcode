/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    // 两个字符串完全相等
    return true;
  }
  const { length } = s1;
  if (length !== s2.length) {
    // 长度不一样，肯定无法在交换后相等
    return false;
  }

  let s1Diff = ''; // 第一次出现不一致的字符
  let s2Diff = '';
  let diffCount = 0; // 不一致的个数
  for (let i = 0; i < length; i++) {
    if (s1[i] !== s2[i]) {
      diffCount++;

      if (diffCount >= 3) {
        // 当错误次数达到3次，则说明已无法通过一次字符串交换得到了
        return false;
      }

      if (!s1Diff) {
        // 第一次遇到字符不一致时，把当前位置的字符存储起来
        s1Diff = s1[i];
        s2Diff = s2[i];
      } else {
        if (s1Diff !== s2[i] || s2Diff !== s1[i]) {
          // 第二次遇到字符不一致时，对比两边的字符是否能对应上
          // 不一致时，就直接返回false；
          // 这里不能用一致时返回true，因为后续可能还会有字符不对应的情况
          return false;
        }
      }
    }
  }

  // 若只有一次的字符不一致，就无法交换，因此这里判断下不一致的字符是否有2个
  return diffCount === 2;
};
