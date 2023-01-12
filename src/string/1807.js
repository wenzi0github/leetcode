/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const map = new Map();

  knowledge.forEach((item) => {
    map.set(item[0], item[1]);
  });
  return s.replace(/\((.*?)\)/g, ($1, $2) => {
    if ($1) {
      return map.get($2) || '?';
    }
    return $1;
  });
};

console.log(
  evaluate('(name)is(age)yearsold', [
    ['name', 'bob'],
    ['age', 'two'],
  ])
);
console.log(evaluate('hi(name)', [['a', 'bob']]));
console.log(evaluate('(a)(a)(a)aaa', [['a', 'yes']]));
