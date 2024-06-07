/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const ans = [];
  let cur = 1;
  let i = 0;

  for (let i = 0; i < num_people; i++) {
    ans[i] = 0;
  }

  while (candies > 0) {
    // console.log(cur, candies);
    ans[i] += Math.min(cur, candies);
    candies -= cur;
    cur++;
    i = (i + 1) % num_people;
  }

  return ans;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
