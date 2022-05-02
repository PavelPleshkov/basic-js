const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// transform([1, 2, 3, '--double-next', 4, 5])// => [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, 4, 5, '--double-next'])// => [1, 2, 3, 4, 5]

// transform(['--double-prev', 1, 2, 3, 4, 5])// => [1, 2, 3, 4, 5]
// transform([1, '--double-prev', 2, 3, 4, 5])// => [1, 1, 2, 3, 4, 5]
// transform([1, 2, '--double-prev', 3, 4, 5])// => [1, 1, 2, 3, 4, 5]
// transform([1, 2, 3, '--double-prev', 4, 5])// => [1, 2, 3, 3, 4, 5]

// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])// => [1, 2, 3, 4, 5]
// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])// => [1, 2, 3, 4, 5]
// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])// => [1, 2, 3, 1337, 1337, 1337, 4, 5]
// transform([1, 2, 3, 1337, '--double-next', '--double-prev', 4, 5])// => [1, 2, 3, 4, 5]
// transform([1, 2, 3, 1337, '--double-next', '--discard-prev', 4, 5])// => [1, 2, 3, 4, 5]
// transform([ true, '--double-next', true ])//[true, true, true]


// transform([1, 2, 3,  4, 5, '--discard-next'])// => [1, 2, 3, 4, 5]
// transform([1, 2, 3, 4, '--discard-next', 5])// => [1, 2, 3, 4]
// transform([1, 2, 3, '--discard-next', 4, 5])// => [1, 2, 3, 5]


// transform([1, 2, 3, '--discard-prev', 4, 5])// => [1, 2, 4, 5]
// transform(['--discard-prev', 1, 2, 3, 4, 5])// => [1, 2, 3, 4, 5]
// transform([1, '--discard-prev', 2, 3, 4, 5])// => [2, 3, 4, 5]

// transform([1, 2, 3, 4, 5]);
// transform([5, 5, 5]);

// transform([1, 2, 3, '--double-prev', '--discard-prev', 4, 5])// => [2, 3, 4, 5]
// transform([ 2, 3, '--discard-prev', '--discard-prev', 4, 5])// => [2, 3, 4, 5]
// transform([ 2, 3, '--discard-prev', '--discard-prev', '--discard-next', 4, 5])// => [2, 3, 4, 5]
// transform([ 2, 3, '--discard-prev', '--discard-prev', '--discard-next', '--discard-next', 4, 5])// => [2, 3, 4, 5]
// transform([ 2, 3, '--discard-prev', '--discard-prev', '--discard-next', '--discard-next', 4, '--discard-prev', 5])// => [2, 3, 4, 5]
// transform([ '--discard-next', 1, 1, '1' ])

function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  // let transformArr = arr.slice();
  let transformArr = [];

  for (let i = 0; i <= arr.length; i++) {
    const controlSeq = ['--double-prev', '--double-next', '--discard-next', '--discard-prev'];
    
    if (controlSeq.includes(arr[i]) && controlSeq.includes(arr[i + 1])) {
      // i = i + 1;
      continue;
    }
    if (controlSeq.includes(arr[i]) && controlSeq.includes(arr[i - 1])) {
      continue;
    }
    if (arr[i] == '--double-prev') {
      if (i == 0) {
        continue;
      }
      
      transformArr[i] = arr[i - 1];
      transformArr[i - 1] = arr[i - 1];
      i++;
    } else if (arr[i] == '--double-next') {
      if (i == arr.length - 1) {
        continue;
      }
      if (arr[i + 1] == '--double-prev' || arr[i + 1] == '--discard-prev') {
        i = i + 1;
        continue;
      }
      transformArr[i] = arr[i + 1];
    } else if (arr[i] == '--discard-prev') {
      if (i == 0) {
        continue;
      }
      transformArr.pop();
    } else if (arr[i] == '--discard-next') {
      if (i == arr.length - 1) {
        continue;
      }
      if (arr[i + 2] == '--discard-prev' || arr[i + 2] == '--double-prev') {
        i = i + 3;
      } else {
        i = i + 1;
      }
    } else
    // } else {
    if (typeof arr[i] != 'undefined') {
    // if (typeof arr[i] == 'number') {
      transformArr.push(arr[i]);
      // transformArr[i] = arr[i];
    }
  }

  // if (transformArr.includes('--discard-prev')) {
  //   if (transformArr.indexOf('--discard-prev') == 0) {
  //     transformArr = transformArr.slice(1);
  //   } else {
  //     transformArr = transformArr.slice(0, transformArr.indexOf('--discard-prev') - 1).concat(transformArr.slice(transformArr.indexOf('--discard-prev') + 1));
  //   }
  // }
  // if (transformArr.includes('--discard-next')) {
  //   if (transformArr.indexOf('--discard-next') == transformArr[transformArr.length - 1]) {
  //     transformArr = transformArr.slice(0, transformArr.length - 1);
  //   } else {
  //     transformArr = transformArr.slice(0, transformArr.indexOf('--discard-next')).concat(transformArr.slice(transformArr.indexOf('--discard-next') + 2))
  //   }
  // }

  // console.log(`arr:           ${arr}\ntransformArr: ${transformArr}`);
  return transformArr;
}

module.exports = {
  transform
};
