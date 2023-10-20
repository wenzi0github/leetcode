/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const m = board.length;
  const n = board[0].length;
  const omap = [];
  const visitedSet = new Set();


  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if (board[i][j] === 'O' && !visitedSet.has(`${i}-${j}`)) {
        visitedSet.add(`${i}-${j}`);
      }
    }
  }
};