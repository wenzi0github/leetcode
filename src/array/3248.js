/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  // "UP"、"RIGHT"、"DOWN" 和 "LEFT"
  const direction = {
    UP: [-1, 0],
    RIGHT: [0, 1],
    DOWN: [1, 0],
    LEFT: [0, -1],
  }
  let x = 0;
  let y = 0;

  commands.forEach(command => {
    x += direction[command][0];
    y += direction[command][1];
  });

  return x * n + y;
};

console.log(finalPositionOfSnake(2, ["RIGHT","DOWN"]));