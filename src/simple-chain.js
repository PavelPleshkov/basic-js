const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],
  str: '',
  length: 0,
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // return this.arr.length;
    return this.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // this.str += `( ${value} )~~`;
    value = ` ${value} `;
    if (arguments.length == 0) {
      value = ' ';
    }
    this.arr.push(`(${value})~~`);
    this.str = this.arr.join('');
    this.length += 1;
    // console.log(this.arr);
    // console.log(this.str);
    // console.log(this.length);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      if (position <= 0 || position !== +(position).toFixed(0) || position > this.length) {
        throw new Error(`You can't remove incorrect link!`);
        // err.message = `You can't remove incorrect link!`;
        // throw err;
      } else {
        this.arr = this.arr.slice(0, position - 1).concat(this.arr.slice([position]));
        this.str = this.arr.join('');
        this.length -= 1;
        // console.log(this.arr);
        // console.log(this.str);
        // console.log(this.length);
        // return this;
      }
    } catch(err) {
      throw new Error(`You can't remove incorrect link!`);
      // err.message = `You can't remove incorrect link!`;
      // throw err;
    }
    
    // if (position !== +(position).toFixed(0) || position > this.length) {
    //   throw new Error(`You can't remove incorrect link!`);
    // } else {
    //   this.arr = this.arr.slice(0, position - 1).concat(this.arr.slice([position]));
    //   this.str = this.arr.join('');
    //   this.length -= 1;
    //   // console.log(this.arr);
    //   // console.log(this.str);
    //   // console.log(this.length);
      return this;
    // }
    
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr = this.arr.reverse();
    this.str = this.arr.join('');
    // console.log(this.arr);
    // console.log(this.str);
    // console.log(this.length);
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.str = this.arr.join('');
    this.arr = [];
    this.length = 0;
    if (this.str[this.str.length - 1] == '~') this.str = this.str.slice(0, this.str.length - 2);
    // console.log(this.str);
    return this.str;
  }
};
// chainMaker.addLink(2).addLink(3);
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).addLink(4).addLink().removeLink(4).reverseChain().finishChain();

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain()//'( 1 )~~( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()// '( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()// '( 2 )~~( 1 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4).finishChain()// '( 2 )~~( 3 )'
// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()//'( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'

module.exports = {
  chainMaker
};
