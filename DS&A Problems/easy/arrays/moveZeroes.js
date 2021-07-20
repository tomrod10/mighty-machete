/*
[Remove Duplicates from Sorted Array] from LeetCode's explore - Array module
https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/

Prompt:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

// Solution
var moveZeroes = function(nums) {
  if (nums === null || nums.length < 1) { return null; }

  if (nums.length === 1) { return nums; }

  let i = 0;
  let j = i+1;

  while (j < nums.length) {
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j = i+1;
      } else {
        j++;
      }
    } else {
      i++;
      j = i+1;
    }
  }
  return nums;
};

//Alternate Solution
var moveZeroes = function(nums) {
  let lastZeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] = != 0) {
      nums[lastZeroIdx++] = nums[i];
    }
  }
  for (let i = lastZeroIdx; i < nums.length; i++) {
    nums[i] = 0;
  }
}