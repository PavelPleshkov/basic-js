const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// dateSample('9000')
// dateSample('1') //=> 22387
// dateSample('WOOT!') //=> false
function dateSample(sampleActivity) {
  if (sampleActivity != +sampleActivity || +sampleActivity <= 0 || sampleActivity == '' || typeof sampleActivity != 'string' || sampleActivity.trim() == '' || arguments.length == 0) return false;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let k = (0.693 / HALF_LIFE_PERIOD).toFixed(10);
  let k = 0.693 / HALF_LIFE_PERIOD;
  // k = 0.000122;
  // console.log(k);
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
  if (result < 0) return false;
  // console.log(result);
  return result;
}

module.exports = {
  dateSample
};
