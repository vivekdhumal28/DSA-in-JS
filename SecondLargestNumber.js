/**
 *  Secind Largest Number
 *
 * Given an array Arr of size N, print second largest number
 * distinct element from an array
 *
 * Example 1:
 * Input = [12,35,1,10,34,1]
 * Output = 34
 *
 * Example 2:
 * Input = [10,5,10]
 * Output = 5
 *
 */
// Solved using in-build Js function

function secondLargest(arr) {
  // Take unique element, and convert set to array
  let uniqueArr = Array.from(new Set(arr));
  // sort the uniqueArr in descending order
  uniqueArr.sort((a, b) => {
    return b - a;
  });

  //check array length of elem, should be greter than 2
  if (uniqueArr.length >= 2) {
    // return second larget
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([10, 5, 10]));

// Optimized approach

function secondLargestElem(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestElem([10, 5, 10]));
