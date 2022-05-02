const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) //=> 'ADMM'
// createDreamTeam([
//   'Amelia',
//   'Grace',
//   'Lily',
//   'Ruby',
// ]);
// createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']);
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) //=> 'LOO'
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members)) return false;

  let team = members.map((member) => {
    if (typeof member == 'string') {
      return member.trim()[0].toUpperCase();
    } else {
      return 0;
    }
  }).filter((member) => member != 0).sort().join('');
  // console.log(team);
  return team;
}

module.exports = {
  createDreamTeam
};
