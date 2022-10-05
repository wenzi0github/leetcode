/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = new Map();

  for (let i = 0; i < cpdomains.length; i++) {
    const [count, website] = cpdomains[i].split(' ');
    const arr = website.split('.');
    const { length } = arr;

    map.set(website, Number(map.get(website) || 0) + Number(count));

    let url = arr[1];

    if (length >= 3) {
      map.set(arr[2], Number(map.get(arr[2]) || 0) + Number(count));

      url += `.${arr[2]}`;
    }
    map.set(url, Number(map.get(url) || 0) + Number(count));
  }
  // console.log(map);
  const result = [];

  for (let [key, value] of map) {
    result.push(`${value} ${key}`);
  }

  return result;
};

console.log(subdomainVisits(['9001 discuss.leetcode.com']));
console.log(subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']));
