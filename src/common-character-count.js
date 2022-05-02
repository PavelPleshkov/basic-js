const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  count = 0;
  s1 = s1.split('').sort();
  // console.log(s1)
  o1 = {}
  for (let i = 0; i < s1.length; i++) {
    if (!o1[s1[i]])  {
      o1[s1[i]] = 1;
    } else {
      o1[s1[i]] += 1;
    }
  }
  // console.log(o1);

  s2 = s2.split('').sort();
  // console.log(s2)
  o2 = {}
  for (let i = 0; i < s2.length; i++) {
    if (!o2[s2[i]])  {
      o2[s2[i]] = 1;
    } else {
      o2[s2[i]] += 1;
    }
  }
  // console.log(o2);

  let str = [...s1, ...s2].sort();
  obj = {}
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]])  {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  // console.log(str);
  // console.log(obj);

  for (let char in obj) {
    if (o1.hasOwnProperty(char) && o2.hasOwnProperty(char)) {
      count += Math.min(o1[char], o2[char]);
    }
  }

  // let s = new Set([...s1, ...s2].sort());
  // console.log(s)

  // for (let char of s) {
    // console.log(char)
  // }
  // console.log(count);
  return count;
}
// getCommonCharacterCount('aabcc', 'adcaa');//3
// getCommonCharacterCount('zzzz', 'zzzzzzz')// 4
// getCommonCharacterCount('abca', 'xyzbac')//, 3
// getCommonCharacterCount('', 'abc')//, 0
// getCommonCharacterCount('a', 'b')//, 0
module.exports = {
  getCommonCharacterCount
};
