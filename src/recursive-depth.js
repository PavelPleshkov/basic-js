const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 0;
  }

  // calculateDepth(arr) {
  //   // this.depth += 1;
  //   for (let subArr of arr) {
  //     if (Array.isArray(subArr)) {
  //       // this.depth += 1;
  //       return this.calculateDepth(subArr);
  //     }
  //     this.depth += 1;
  //   }
  //   // if (Array.isArray(arr)) {
  //   //   this.depth += 1;
  //     // for (let subArr of arr) {
  //     //   if (Array.isArray(subArr)) {
  //     //     this.depth += 1;
  //     //     this.calculateDepth(subArr);
  //     //     // this.depth += 1;
  //     //     // return this.depth;
  //     //   }
  //     //   // this.depth+=1;
  //     // }
  //     this.depth += 1;
  //   // }

  //   // console.log(this.depth);
  //   this.d = this.depth;
  //   this.depth = 0;
  //   console.log(this.d);
  //   return this.d;
  //   // return this.depth;
  // }

  // calculateDepth(arr) {
  //   // throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  //   if (Array.isArray(arr)) {
  //     for (let subArr of arr) {
  //       if (Array.isArray(subArr)) {
  //         this.depth+=1;
  //         return this.calculateDepth(subArr);
  //       }
  //     }
  //     this.depth+=1;

  //   }

  //   console.log(this.depth);
  //   this.d = this.depth;
  //   this.depth = 0;
  //   console.log(this.d);
  //   return this.d;
  //   // return this.depth;
  // }

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      this.depth += 1;

      for (let subArr of arr) {
        if (Array.isArray(subArr)) {
          // this.depth+=1;
          // this.depth += this.calculateDepth(subArr)
          return this.calculateDepth(subArr);
        }
      }
    }
  //  this.depth += 1;

    // console.log(this.depth);
    // return this.depth;
    this.d = this.depth;
    this.depth = 0;
    // console.log(this.d);
    return this.d;
  }
}

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, 5]) //=> 1
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) //=> 2
// depthCalc.calculateDepth([[[]]]) //=> 3
// depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])//5
// depthCalc.calculateDepth([1, [2, [3, [4]]], 1, 1, [2, [3]], 1, 1, [2, [3, [4, [5]]]]])//5

module.exports = {
  DepthCalculator
};
