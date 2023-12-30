/** 
 * 
 *  You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the 
 * two endpoints of the ith line are (i, 0) and (i, height[i]).
   Find two lines that together with the x-axis form a container, 
   such that the container contains the most water.
   Return the maximum amount of water a container can store.
   Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1


Solution = > 
* Initalize a var with Zero initially
  maxArea = 0;
  take two pointers
  left = 0, right = arr.length -1;
  left pointer should be always less than right cond'n
  Took minimum height min height = Math.min(arr[l], arr[r])
  calculate width = right - left;
  measure maxArea =  min height into width
  if left pointer height is less then increment pointer left by 1
  if right pointer height is less then decrement pointer left by 1
  if both are equal then increment left and decrement right by 1
  return maxArea;
 * 
 */

// ======================================================================
// Code

var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );

    if (height[left] < height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    } else {
      left++;
      right--;
    }
  }
  return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
