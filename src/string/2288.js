/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
  const words = sentence.split(' ');

  let str = '';

  words.forEach((word) => {
    const [match, money] = word.match(/^\$(\d+)$/) || [];

    if (match) {
      word = `$${(Number(money) * (1 - discount / 100)).toFixed(2)}`;
    }
    if (!str) {
      str = word;
    } else {
      str += ` ${word}`;
    }
  });

  return str;
};

console.log(discountPrices('there are $1 $2 and 5$ candies in the shop', 50));
console.log(discountPrices('1 2 $3 4 $5 $6 7 8$ $9 $10$', 100));
