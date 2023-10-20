/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const TEN_THOUSAND = 10_000;

  const isBulky =
    length >= TEN_THOUSAND ||
    width >= TEN_THOUSAND ||
    height >= TEN_THOUSAND ||
    length * width * height >= 1_000_000_000;
  const isHeavy = mass >= 100;

  if (isBulky && isHeavy) {
    return 'Both';
  }
  if (isBulky) {
    return 'Bulky';
  }
  if (isHeavy) {
    return 'Heavy';
  }
  return 'Neither';
};
