/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  const arr = [];
  let oneNum = 0;

  while (num) {
    const res = num & 1;
    if (res) {
      oneNum++;
    } else {
      if (oneNum) {
        arr.push(oneNum);
      }
      arr.push(0);
      oneNum = 0;
    }
    num >>= 1;
  }
  arr.push(oneNum);
  console.log(arr);
};

reverseBits(1775);
reverseBits(16);
reverseBits(7);
