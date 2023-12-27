/**
 *  Fibonacci number
 *   Fibonacci series ->  0,1,1,2,3,5,8,13,21,34,55,89,144....
 *   F(0) = 0, F(1) = 1
 *   F(n) = F(n - 1) + F(n - 2), for n > 1
 *
 *  Input: n = 3 output= 2    0,1,1,2,3,5,8,13,21,34,55,89,144....
 *                 Index(n)=  0,1,2,3,4,5,6, 7 ,8, 9,10,11, 12
 */
// Using Recursion
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(9));

// Without recurring

function fibbo(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
  return arr[n];
}
let res = fibbo(4);
console.log(res);
