/**
 *   Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
 *   value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * 
 *   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 *   Example1:
 *   Input: x = 123
     Output: 321

 *   Example2:
     Input: x = -123
     Output: -321

 *   Example3:
     Input: x = 120
     Output: 21

   Constraints:
   -231 <= x <= 231 - 1
 * 
 */

function reverseInteger(x) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  const reverseStringInt = Math.abs(x).toString().split("").reverse().join("");
  const reverseInt = parseInt(reverseStringInt, 10) * Math.sign(x);
  if (reverseInt > INT_MAX || reverseInt < INT_MIN) return 0;

  return reverseInt;
}

console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
