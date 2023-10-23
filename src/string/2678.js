/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.filter((detail) => {
    const age = detail.substring(11, 13);

    return age > '60';
  }).length;
};
