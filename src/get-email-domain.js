const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // console.log(email.match(/[^@]{0,}$/gm)[0]);
  return email.match(/[^@]{0,}$/gm)[0];
}

// getEmailDomain('prettyandsimple@example.com')//example.com
module.exports = {
  getEmailDomain
};
