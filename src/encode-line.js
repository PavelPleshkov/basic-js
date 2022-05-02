const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 1;
  let res = '';

  for (let i = 0; i < str.length;) {
    if (str[i] != str[i + 1] && str[i - 1] != str[i])  {
      res += str[i];
      i++;
      continue;
    } else if (str[i - 1] == str[i]) {
      i++;
    } else {
      while (str[i] == str[i + 1]) {
        count++;
        i++;
      }
      res += `${count}${str[i - 1]}`;
      count = 1;
    }
  }
  // console.log(res);
  return res;
}
// encodeLine('aabbbc') //=> '2a3bc'
module.exports = {
  encodeLine
};
