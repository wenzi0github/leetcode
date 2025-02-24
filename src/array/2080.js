/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  this.arr = arr;
  this.map = new Map();
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  const key = `${left}-${right}-${value}`;
  if (this.map.has(key)) {
    return this.map.get(key);
  }

  let count = 0;

  for (let i = left; i <= right; i++) {
    if (this.arr[i] === value) {
      count++;
    }
  }
  this.map.set(key, count);

  return count;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */