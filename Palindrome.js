/* Q1) Check palindrome number 
 Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1) 
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2) 
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

*/

// function isPalindrome(x) {
//   return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// }
// const result = isPalindrome(1212121);
// console.log(result);

//-----------------------------------------------------------------------------------------------------------
// Solve without converting it to String

// function isPalindromeNotString(x) {
//   if (x < 0 || (x !== 0 && x % 10 === 0)) {
//     return false;
//   }

//   let reverseHalf = 0;
//   while (x > reverseHalf) {
//     reverseHalf = reverseHalf * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }

//   return x === reverseHalf || x === Math.floor(reverseHalf / 10);
// }
// console.log(isPalindromeNotString(123210));

//-----------------------------------------------------------------------------------------------------------
