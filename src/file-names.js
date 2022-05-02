const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let files = [];
  let count = 1;
  let uniq = {};

  for (let i = 0; i < names.length; i++) {
    if (!uniq[names[i]]) {
      uniq[names[i]] = 1;
    } else {
      uniq[names[i]]++;
    }
  }
  // console.log(uniq)

  for (let i = 0; i < names.length; i++) {
    // if (uniq[names[i]]) {

    // }
    if (files.includes(names[i]) && names[i] != files[i]) {
      files.push(`${names[i]}(${count++})`);
    } else {
      files.push(`${names[i]}`);
    }
  }

  // for (let name of names) {
  //   if (files.includes(name)) {
  //     files.push(`${name}(${count++})`);
  //   } else {
  //     files.push(`${name}`);
  //   }
  // }
  // console.log(names)
  // console.log(files);
  return files;
}

// let names = ["file", "file", "image", "file(1)", "file"];
// renameFiles(names);
// the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]

module.exports = {
  renameFiles
};
