/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.n = n;
  this.ptr = 1;
  this.list = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.list[idKey] = value;

  if (idKey === this.ptr) {
    const result = [];
    let i = idKey;

    while (this.list[i] && i<=this.n) {
      result.push(this.list[i]);
      i++;
    }
    this.ptr = i;

    return result;
  }
  return [];
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */