const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
//  const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
// getSeason(fakeDate);
// getSeason(new Date(235, 0, 0, 17, 9, 0, 802));

function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(date.toString());
  // console.log(date.now());
  // console.log(Date.now());
  // console.log(date.getTime());
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch(err) {
    throw new Error('Invalid date!');
  }
  // if (!(date instanceof Date)) throw new Error('Invalid date!');
  // if (!(Object.prototype.toString.call(date) === '[object Date]')) throw new Error('Invalid date!');
  // if (!date.setHours(0)) throw new Error('Invalid date!');
  // if (date.toString.trim() === 'return Date.prototype.toString.call(new Date());') throw new Error('Invalid date!');
  // if (!date.hasOwnProperty('setDate')) throw new Error('Invalid date!');
  // if (!date.setHours(0)) throw new Error('Invalid date!');
  // if (!(Object.prototype.toString == '[object Date]'))
  // if (date.Symbol.toStringTag == 'Date') throw new Error('Invalid date!');
  // if ((date == Date.now())) throw new Error('Invalid date!');

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    case 8:
    case 9:
    case 10:
      return 'autumn';
      break;
    default:
      // return 'Unable to determine the time of year!';
      throw new Error('Invalid date!');
      break;
  }
}

module.exports = {
  getSeason
};
