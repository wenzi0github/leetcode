/**
 * @see https://leetcode.cn/problems/sentence-similarity-iii/submissions/395570683/
 * 插入一次任意的单词（可以不插入），让两个字符串相等，主要有以下的几种情况：
 * 1. 两个字符窜本身就相等，为true；
 * 2. 其中一个为空，这个空字符串可以插入任意的字符串，然后与另一个字符串相等，为true；
 * 3. 短字符串中的单词只能在长字符串的开头或结束的位置，不能在中间，否则最少插入两次，才能完成；
 *    本来想提前做个判断，若左右两端不相等，直接返回false；不过后续的程序也可以判断，这步就先去掉了；
 * 4. 若能完全匹配成前缀，则为true；
 * 5. 若能完全匹配成后缀，则为true；
 * 6. 前后各自查找后，相同的位置相差能小于等于1，则为true；
 */

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2 || !sentence1 || !sentence2) {
    /**
     * 为true的简易判断：
     * 1. 两者相等；
     * 2. 其中一个为空；
     */
    return true;
  }

  const sentence1Attr = sentence1.split(' ');
  const sentence2Attr = sentence2.split(' ');
  let minAttr = sentence1Attr;
  let maxAttr = sentence2Attr;
  if (sentence1Attr.length > sentence2Attr.length) {
    minAttr = sentence2Attr;
    maxAttr = sentence1Attr;
  }
  // const { length: minLen } = minAttr;

  // if (minAttr[0] !== maxAttr[0] && minAttr[minAttr.length - 1] !== maxAttr[maxAttr.length - 1]) {
  //   // 开头和结尾，至少得有一个相等
  //   return false;
  // }
  // if (minLen === 1 && (minAttr[0] === maxAttr[0] || minAttr[0] === maxAttr[maxAttr.length - 1])) {
  //   return true;
  // }

  // 接下来判断某个字符串是否是另一个字符串的开头和结尾
  let prefixEndIndex = -10; // 前缀结束的那个位置
  let suffixStartIndex = minAttr.length + 10;
  for (let i = 0; i < minAttr.length; i++) {
    if (minAttr[i] !== maxAttr[i]) {
      prefixEndIndex = i - 1;
      break;
    }
  }
  if (prefixEndIndex === -10) {
    // 前缀完全能匹配上，直接返回true
    return true;
  }
  for (let i = minAttr.length - 1, j = maxAttr.length - 1; i >= 0 && j >= 0; i--, j--) {
    if (i === prefixEndIndex) {
      // 若前后能衔接上，则为true
      return true;
    }
    if (minAttr[i] !== maxAttr[j]) {
      suffixStartIndex = i + 1;
      break;
    }
  }
  if (suffixStartIndex === minAttr.length + 10) {
    // 后缀完全能匹配上
    return true;
  }
  // console.log(minAttr, maxAttr, prefixEndIndex, suffixStartIndex);
  return prefixEndIndex + 1 >= suffixStartIndex;
};

console.log(areSentencesSimilar('my a name is a tom', 'my a tom'), true);
console.log(areSentencesSimilar('of', 'a out of words'), false);
console.log(areSentencesSimilar('eating right now', 'eating'), true);
console.log(areSentencesSimilar('eating right now', 'eat'), false);
console.log(areSentencesSimilar('lucky', 'luccccky'), false);
console.log(areSentencesSimilar('c h p Ny', 'c BDQ r h p Ny'), true);
console.log(areSentencesSimilar('a BaabbAABbBbbaAb', 'a BbbA baaaaBaAabB bbab AaAB'), false);
console.log(areSentencesSimilar('xD iP tqchblXgqvNVdi', 'FmtdCzv Gp YZf UYJ xD iP tqchblXgqvNVdi'), true);
