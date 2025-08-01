/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const arr = [[1]];

  for(let i=1; i<numRows; i++){
    const rows = [1];
    let j = 1;
    for(;j<i; j++){
      rows[j] = arr[i-1][j] + arr[i-1][j-1];
    }
    rows[j] = 1;

    // console.log(i, rows);

    arr.push(rows);
  }

  return arr;
};

console.log(generate(5))