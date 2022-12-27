/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const words = title.split(' ');

  return words
    .map((word) => {
      const newWord = word.toLowerCase();
      if (word.length <= 2) {
        return newWord;
      }
      // newWord[0] = newWord[0].toUpperCase();
      // console.log('newWord', newWord, newWord[0].toUpperCase());

      // 不能直接修改字符串中的字符
      return newWord[0].toUpperCase() + newWord.slice(1);
    })
    .join(' ');
};
console.log(capitalizeTitle('capiTalIze tHe titLe'));
console.log(capitalizeTitle('First leTTeR of EACH Word'));
