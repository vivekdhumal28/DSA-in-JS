/* Q1) Reverse A string 

Example 1:
input: You are the winner!
output: !renniw eht era uoY
*/

// function stringReverse(str) {
//   const strArr = str.split(""); // split string ["Y", "o", ...] ...so on
//   let left = 0;
//   let right = strArr.length - 1;

//   while (left < right) {
//     [strArr[left], strArr[right]] = [strArr[right], strArr[left]];

//     left++;
//     right--;
//   }

//   return strArr.join("");
// }
// console.log(stringReverse("You are the winner!"));

/* Q1) Reverse A string in place

Example 1:
input: You are the winner!
output: uoY era eht !renniw

*/

function stringReverseInPlace(str) {
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    // array iteration should be less that strArr length
    strArr[i] = strArr[i].split("").reverse().join(""); // each word reverse
  }

  return strArr.join(" "); // join with space
}
console.log(stringReverseInPlace("You are the winner!"));
