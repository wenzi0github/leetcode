var FrequencyTracker = function () {
  this.obj = {}; // 每个数字的个数
  this.result = {}; // 每个个数是否有数字
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  const prev = this.obj[number] || 0;
  this.obj[number] = prev + 1;

  if (this.result[prev]) {
    this.result[prev] -= 1;
  }
  this.result[this.obj[number]] = (this.result[this.obj[number]] || 0) + 1;
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  if (this.obj[number]) {
    const prev = this.obj[number];
    this.obj[number] = prev - 1;

    this.result[prev] -= 1;
    this.result[this.obj[number]] = (this.result[this.obj[number]] || 0) + 1;
  }
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  if (this.result[frequency]) {
    return true;
  }
  return false;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
