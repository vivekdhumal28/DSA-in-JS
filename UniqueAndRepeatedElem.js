/**
 * Provide the array of Unique elements and repeated elements
 *
 * Input: arr1 = [1,2,3,4,5,6,7], arr2 = [1,4,7,8]
 * Output = Unique = [1,2,3,4,5,6,7,8], repeated =  [1,4,7]
 *
 */

function findUniqueAndRepeated(arr1, arr2) {
  const uniqueSet = new Set();
  const repeatedSet = new Set();
  let combinedArr = [...arr1, ...arr2];

  combinedArr.forEach((item) => {
    if (uniqueSet.has(item)) {
      repeatedSet.add(item);
    } else {
      uniqueSet.add(item);
    }
  });
  const uniqueElem = Array.from(uniqueSet);
  const repeatedElem = Array.from(repeatedSet);
  return {
    uniqueElem,
    repeatedElem,
  };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [1, 4, 7, 8];
const { uniqueElem, repeatedElem } = findUniqueAndRepeated(arr1, arr2);
console.log("uniqueElem = ", uniqueElem, "repeatedElem = ", repeatedElem);

// Better approach

function findUniqueAndRepeated2(arr1, arr2) {
  const uniqueElem = [];
  const repeatedElem = [];
  let combinedArr = [...arr1, ...arr2];
  const seen = {};

  for (let elem of combinedArr) {
    if (seen[elem]) {
      repeatedElem.push(elem);
    } else {
      seen[elem] = true;
      uniqueElem.push(elem);
    }
  }

  return {
    uniqueElem,
    repeatedElem,
  };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [1, 4, 7, 8];
const { uniqueElem, repeatedElem } = findUniqueAndRepeated2(arr1, arr2);
console.log("uniqueElem = ", uniqueElem, "repeatedElem = ", repeatedElem);
