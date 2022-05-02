const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
//  repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })//=> 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
//  repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })// 'TESTstrADD!'
//  repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })//'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
//  repeater('STRING_OR_DEFAULT', { repeatTimes: 2, separator: '', addition: 'STRING_OR_DEFAULT', additionRepeatTimes: undefined, additionSeparator: '' })

function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = `${str}`;
  options.addition = `${options.addition}`;

  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.addition) {
    options.addition = '';
  }

  // if (options.additionRepeatTimes && typeof options.additionRepeatTimes != 'number') {
  //   options.additionRepeatTimes = 1;
  //   console.log(options.additionRepeatTimes)
  // }
  if (options.additionRepeatTimes && typeof options.additionRepeatTimes == 'number') {
    let adds = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      adds.push(`${options.addition}`);
    }
    adds = adds.join(`${options.additionSeparator}`);
    // console.log(adds);
    // let addition = `${options.addition}`
    str = `${str}${adds}`;
  // } else {
    // str = `${str}${options.addition}`
  }
  
  

  if (options.repeatTimes) {
    let strs = [];
    for (let i = 0; i < options.repeatTimes; i++) {
      strs.push(str);
    }
    // console.log(strs);
    str = strs.join(`${options.separator}`)
  } else {
    str = `${str}${options.addition}`;
  }

  
  // str = `${str}${options.separator}`.repeat(options.repeatTimes);

  console.log(str);
  return str;
}

module.exports = {
  repeater
};
