/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.snap_id = 0;
  this.length = length;

  this.obj = { 0: {} };
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.obj[this.snap_id][index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  const snap_id = this.snap_id;
  const arr = this.obj[snap_id];

  this.snap_id++;
  this.obj[this.snap_id] = { ...arr };

  return snap_id;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  return this.obj[snap_id][index] || 0;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
