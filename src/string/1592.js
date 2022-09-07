/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const { length } = text;
  const words = []; // 存储所有的单词

  let i = 0;
  let spaceNum = 0;
  let word = '';
  let prevCharIsWord = false; // 上一个字符是否是a-z，若当前是空格，上一个字符是a-z，则说明单词结束

  for (; i < length; i++) {
    if (text[i] === ' ') {
      spaceNum++;

      if (prevCharIsWord) {
        // 若当前是空格，且上一个字符是a-z，则说明单词结束
        words.push(word);
        word = '';
      }
      prevCharIsWord = false;
    } else {
      prevCharIsWord = true;
      word += text[i];
    }
  }
  if (i >= length && prevCharIsWord) {
    // 若遍历结束，且最后一个字符是a-z，说明也是一个单词，单词个数+1
    words.push(word);
  }
  // console.log(spaceNum, words);
  const { length: wordsLen } = words;

  /**
   * 获取固定长度的由空格组成的字符串
   * @param {number} num 多少个空格
   * @returns {string}
   */
  const getSpaceStr = (num) => {
    let spaceStr = '';
    for (let i = 0; i < num; i++) {
      spaceStr += ' ';
    }
    return spaceStr;
  };

  if (wordsLen <= 1) {
    return `${words[0]}${getSpaceStr(spaceNum)}`;
  }

  const avgSpace = Math.floor(spaceNum / (wordsLen - 1)); // 每个间隙中间的空格个数
  const lastSpace = spaceNum % (wordsLen - 1); // 结尾的空格个数

  let str = words[0];
  for (let i = 1; i < wordsLen; i++) {
    str += `${getSpaceStr(avgSpace)}${words[i]}`;
  }
  str += getSpaceStr(lastSpace);
  return str;
};

console.log(reorderSpaces('  this   is  a sentence '));
console.log(reorderSpaces(' practice   makes   perfect'));
console.log(reorderSpaces('hello   world'));
console.log(reorderSpaces('  walks  udp package   into  bar a'));
