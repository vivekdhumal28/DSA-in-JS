/**
 *   Given an integer array nums, find the 
     subarray
     with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

 */

//Brute force solution using multiple for loops

var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

//----------------------------------------------
//If We want maxim sum sub-array also

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  return {
    sum: maxSum,
    subArray: nums.slice(startIndex, endIndex + 1),
  };
};

console.log(maxSubArray([-2, 1, -5, 4]));

//----------------------------------------------------------------------
// Kadanes alogothms

var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -5, 4]));
