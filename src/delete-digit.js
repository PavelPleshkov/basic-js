const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n = n.toString();
  // console.log(n);

  // let min = Math.min(...n);
  // console.log(min)
  let max = +n.replace(n[0], '');;
  for (let i = 0; i < n.length; i++) {
    if (+n.replace(n[i], '') > max) {
      max = +n.replace(n[i], '');
    }
  }
  // console.log(max)
  return max
  // n = +n.replace(min, '')
  // console.log(n);
  // return n;
}
// deleteDigit(152)//52
// deleteDigit(1001)// 101
// deleteDigit(342)// 42
module.exports = {
  deleteDigit
};
