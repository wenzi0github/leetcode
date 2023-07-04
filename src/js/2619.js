Array.prototype.last = function () {
  const { length } = this;

  if (length === 0) {
    return -1;
  }
  return this[length - 1];
};
