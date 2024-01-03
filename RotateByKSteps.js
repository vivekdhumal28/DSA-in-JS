/**
 *  Rotate by K
 *  Given an integer array nums, ratate the array to the right by 'K' steps
 *   Where K is non-negetive
 *
 * Example 1:
 * Input: [1,2,3,4,5,6,7], k = 3
 * Output = [5,6,7,1,2,3,4]
 *
 * Example 2:
 * Input: [-1,-100,3,99], K=2
 * Output: [3,99,-1,-100]
 *
 */
// Brute force using In-built js function

function RotateArray(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  let rotatedArr = nums.splice(size - k, size);
  nums.unshift(...rotatedArr);

  return nums;
}
console.log(RotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Optimized Approach Using pointer and array swap
// [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]
// Nums            => reverse  => reverse 1st till k-1  => reverse k to nums.length -1

function RotatingArr(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}
// Always retun from callable function
console.log(RotatingArr([-1, -100, 3, 99], 2));
