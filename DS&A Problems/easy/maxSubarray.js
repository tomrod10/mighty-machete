/* [Maximum Subarray] from LeetCode's explore - Array module

Prompt:
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
*/

// My attempted solution
// failed on input [-2, 1]
var maxSubArray = function(nums) {
  if (nums === null || nums.length < 1) { return 0 }
  if (nums.length === 1) { return nums[0] }

  let i = 0;
  let sum = nums[i];
  let max = nums.reduce((acc, curr) => (acc + curr));

  for (let j = 1; j < nums.length; j++) {
    if (sum + nums[j] > max) {
      max = sum + nums[j];
    } else {
      sum -= nums[i];
      i++;
      sum += nums[j];
    }
  }
  return max;
};

// Alternate solution using Kadane's Algorithm
var maxSubArray = function(nums) {
  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};

let test1 = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // 6
let test2 = maxSubArray([1]); // 1
let test3 = maxSubArray([5,4,-1,7,8]); // 23

console.log(test1);
console.log(test2);
console.log(test3);
