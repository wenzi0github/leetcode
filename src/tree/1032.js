class TrieNode {
  val = null;
  childNodes = [];
  count = 0;
  isWord = false;

  constructor(val) {
    this.val = val ?? null;
    this.childNodes = []; // 26个字符
    this.count = 1; // 出现的次数
    this.isWord = false; // 是否是一个完整的前缀
  }
}

class TrieTree {
  root = new TrieNode();

  /**
   * 初始化
   * @param {?string[]} dictionary
   */
  constructor(dictionary) {
    if (dictionary) {
      dictionary.forEach((word) => {
        this.insert(word);
      });
    }
  }

  /**
   * 插入
   * @param {string} word
   */
  insert(word) {
    const aCode = 'a'.charCodeAt(0);
    const { length } = word;
    let i = 0;
    let prevNode = this.root;

    while (i < length) {
      const node = new TrieNode(word[i]);
      const wordCode = word[i].charCodeAt(0) - aCode;

      if (prevNode.childNodes[wordCode]) {
        prevNode.childNodes[wordCode].count++;
      } else {
        prevNode.childNodes[wordCode] = node;
      }
      // 词根单词结束的时候，给最后的这个节点一个标记，表示到当前节点是一个完整的词根
      if (i === length - 1) {
        prevNode.childNodes[wordCode].isWord = true;
      }
      prevNode = prevNode.childNodes[wordCode];

      i++;
    }
  }

  /**
   * 查询单词是否存在在前缀树中
   * @param {string} word 要查询的单词
   * @param {boolean} isWord 是否要查询完整的单词，为false时只要word存在即可，为true时，word必须是一个完整的单词，即node.isWord为true
   */
  search(word, isWord = false) {
    const aCode = 'a'.charCodeAt(0);
    const { length } = word;

    const find = (node, curIndex = 0) => {
      const kCode = word[curIndex].charCodeAt(0) - aCode;
      const child = node.childNodes[kCode];

      if (child) {
        if (curIndex === length - 1) {
          // 这是最后一个字符，若需要判断是否是完整的单词，则返回该字符的isWord属性；
          // 若不需要判断，则直接返回true即可
          return isWord ? child.isWord : true;
        }
        return find(child, curIndex + 1);
      }
      return false;
    };

    return find(this.root);
  }
}

/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  this.trie = new TrieTree(words);

  const set = new Set();
  words.forEach((word) => {
    set.add(word.length);
  });
  this.set = set;
  this.letters = '';
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.letters += letter;

  for (let len of this.set) {
    // console.log(len);
    const word = this.letters.slice(-len);
    const res = this.trie.search(word, true);

    if (res) {
      return true;
    }
  }
  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
const words = ['cd', 'f', 'kl'];
var obj = new StreamChecker(words);

const aa = 'abcdefhijkl';

for (let i = 0; i < aa.length; i++) {
  console.log(aa[i], obj.query(aa[i]));
}
