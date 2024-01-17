/**
 * Find the missing number from the series of an intergers
 * and length is alredy given.
 *
 * Example 1:
 * n = 10;
 * arr =  [1,2,3,4,10,5,6,7,8]
 */

let findMissingNumber = (arr, n) => {
  let expSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  let missNum = expSum - actualSum;
  return missNum;
};

// Given
const n = 10;
let arr = [1, 2, 3, 4, 10, 9, 5, 7, 8];
let missingNumber = findMissingNumber(arr, n);
console.log(missingNumber);
