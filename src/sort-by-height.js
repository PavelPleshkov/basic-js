const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let obj ={};
  let indexes = []
  let startArr = arr.slice().sort()
  if (arr.includes(-1)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == -1) {
        indexes.push(i);
      }
    }
    arr.sort();
    arr = arr.slice(indexes.length)
    // console.log(arr)
  
    for (let i = 0; i < indexes.length; i++) {
      // arr = arr.slice(0, indexes[i]).concat(indexes[i], arr.slice(indexes[i] + 1))
      if (indexes[i] == 0) {
        arr.unshift(-1);
      } else {
        arr = arr.slice(0, indexes[i]).concat(-1, startArr.slice(indexes[i] + 1))
      }
      
    }
    // console.log(arr)
  
    // console.log(indexes)
  } else {
    arr = startArr.sort((a,b) => a - b);
    // console.log(arr);
  }
  
  return arr;
}

// let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// sortByHeight(arr);
// The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
// arr = [ 11, 16, 2, 2, 4, 9 ];
// sortByHeight(arr);


module.exports = {
  sortByHeight
};
