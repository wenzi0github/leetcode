/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const allCodeLen = 26;
  const set = new Set();
  for (let i = 0; i < sentence.length; i++) {
    set.add(sentence[i]);
  }
  return set.size === allCodeLen;
};

checkIfPangram("abc");
