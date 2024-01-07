/**
 *  Removes Duplicates from sorted array
 *  Given an integer array nums sorted in non-decreasing order,
 *  remove the duplicates in-place such that each unique element appears
 *  only once. The relative order of the elements should be kept the
 *  same. The return the number of unique elements in nums
 *
 * Input = [1,1,2]              ------>>>> Output = 2, [1,2,_]
 * Input = [0,0,1,1,1,2,2,3,3,4] ----->>>> Output = 5, [0,1,2,3,4,_,_,_,_,_]
 */

// Brute force(Nit In-place)
function RemoveDuplicates(nums) {
  // Not in-place, Set creates a new array
  let spred = [...new Set(nums)];
  return spred.length;
}
console.log(RemoveDuplicates([1, 1, 2]));

// 2nd approach Using in-built function

function removeDuplicate1(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}
console.log(removeDuplicate1([1, 1, 2, 3, 3]));

// Optimized Approach
function removeDuplicate(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
