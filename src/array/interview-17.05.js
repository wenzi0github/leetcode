/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  const prefixSum = [{ num: 0, cc: 0 }];
  let obj = {
    maxLen: 0,
    start: -1,
    end: 0,
  };

  for (let i = 0; i < array.length; i++) {
    const { num, cc } = prefixSum[i];
    if (/\d/.test(array[i])) {
      prefixSum[i + 1] = { num: num + 1, cc };
    } else {
      prefixSum[i + 1] = { num, cc: cc + 1 };
    }
  }
  // console.log(prefixSum);
  for (let i = 0; i < array.length; i++) {
    if (array.length - 1 - i <= obj.maxLen) {
      break;
    }
    for (let j = array.length - 1; j > i; j--) {
      if (j - i <= obj.maxLen) {
        break;
      }

      const num = prefixSum[j + 1].num - prefixSum[i].num;
      const cc = prefixSum[j + 1].cc - prefixSum[i].cc;

      if (num === cc) {
        // console.log(i, j, num);
        // return array.slice(i, j + 1);
        if (j - i > obj.maxLen) {
          obj = {
            maxLen: j - i,
            start: i,
            end: j,
          };
        }
        break;
      }
    }
  }
  if (obj.start >= 0) {
    return array.slice(obj.start, obj.end + 1);
  }
  return [];
};

console.log(
  findLongestSubarray([
    '42',
    '10',
    'O',
    't',
    'y',
    'p',
    'g',
    'B',
    '96',
    'H',
    '5',
    'v',
    'P',
    '52',
    '25',
    '96',
    'b',
    'L',
    'Y',
    'z',
    'd',
    '52',
    '3',
    'v',
    '71',
    'J',
    'A',
    '0',
    'v',
    '51',
    'E',
    'k',
    'H',
    '96',
    '21',
    'W',
    '59',
    'I',
    'V',
    's',
    '59',
    'w',
    'X',
    '33',
    '29',
    'H',
    '32',
    '51',
    'f',
    'i',
    '58',
    '56',
    '66',
    '90',
    'F',
    '10',
    '93',
    '53',
    '85',
    '28',
    '78',
    'd',
    '67',
    '81',
    'T',
    'K',
    'S',
    'l',
    'L',
    'Z',
    'j',
    '5',
    'R',
    'b',
    '44',
    'R',
    'h',
    'B',
    '30',
    '63',
    'z',
    '75',
    '60',
    'm',
    '61',
    'a',
    '5',
    'S',
    'Z',
    'D',
    '2',
    'A',
    'W',
    'k',
    '84',
    '44',
    '96',
    '96',
    'y',
    'M',
  ])
);
