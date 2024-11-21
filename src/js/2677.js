/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const result = [];
  const { length } = arr;

  if (!length) {
    return arr;
  }
  if (size >= length) {
    return [arr];
  }

  let item = [];
  for(let j = 0; j < length; j++) {
    item.push(arr[j]);

    if (item.length === size) {
      result.push([...item]);
      item = [];
    }
  }
  if (item.length) {
    result.push([...item]);
  }

  return result;
};