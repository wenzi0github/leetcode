/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const pairs = [];
  const map = new Map();

  // 倒序
  potions.sort((a, b) => (a > b ? -1 : 1));

  for (let i = 0, len = spells.length; i < len; i++) {
    let count = 0;
    const value = map.get(spells[i]);

    if (value === undefined) {
      const least = success / spells[i];
      for (let j = 0, plen = potions.length; j < plen; j++) {
        if (potions[j] >= least) {
          count++;
        } else {
          break;
        }
      }
      map.set(spells[i], count);
    } else {
      count = value;
    }

    pairs.push(count);
  }

  return pairs;
};
