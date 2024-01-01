/**
 *
 * Que) Move all the zeros in the array to the end of the array.
 *
 * Example 1:
 * Input = [1,2,3,0,7,0,8,9,0,4]
 * Output = [1,2,3,7,8,9,4,0,0,0]
 *
 * Example 2:
 * Input = [0,1]
 * Output = [1,0]
 */

const moveZeroes = (arr) => {
  let zeros = [];

  arr = arr.filter((num) => (num === 0 ? zeros.push(num) && false : true));

  return arr.concat(zeros);
};

console.log(moveZeroes([0, 1]));

// Create a polyfill for filter function, Solve without using inbuilt filter HOF.

/** Filter polyfill */

Array.prototype.myFilter = function (cb) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) tempArr.push(this[i]);
  }
  return tempArr;
};

function moveZeroesWithMyFilter(arr) {
  let zeros = [];

  arr = arr.myFilter((num) => (num !== 0 ? true : zeros.push(num) && false));

  return arr.concat(zeros);
}

let res = moveZeroesWithMyFilter([0, 1]);
console.log(res);
