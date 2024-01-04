/**
 *  You are given two integer arrays nums1 and nums2, 
 * sorted in non-decreasing order, and two integers m and n, 
 * representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in 
 * non-decreasing order.
 * The final sorted array should not be returned by the function, 
 * but instead be stored inside the array nums1. To accommodate this, 
 * nums1 has a length of m + n, where the first m elements denote the 
 * elements that should be merged, 
 * and the last n elements are set to 0 and should be ignored. 
 * nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

 * 
 */

// Brute force
function merge(nums1, m, nums2, n) {
  // Copy the elements of nums2 to the end of nums1
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  // Sort
  nums1.sort((a, b) => a - b);
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

//2nd Approach)  Time complexity O(m+n)
function merge(nums1, m, nums2, n) {
  let p1 = 0; // Pointer for nums1
  let p2 = 0; // Pointer for nums2

  // Iterate while both pointers are within their respective array lengths
  while (p1 < m && p2 < n) {
    // If the current element in nums2 is smaller or equal to the current element in nums1,
    // insert the element from nums2 into nums1 and move the pointers accordingly
    if (nums2[p2] <= nums1[p1]) {
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      m++; // Increase the length of nums1 since we've added an element
    }
    p1++;
  }
  // If there are remaining elements in nums2, append them to nums1
  while (p2 < n) {
    nums1[m++] = nums2[p2++];
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
