/*
[Sort Array By Parity] from LeetCode's explore - Array module
https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/

Prompt:
Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

You may return any answer array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */

// Solution
var sortArrayByParity = function(nums) {
  let i = 0;
  let last = nums.length - 1;

  while (i < last) {
    if (nums[i] % 2 === 1) {
      if (nums[last] % 2 === 0) {
        let temp = nums[i];
        nums[i] = nums[last];
        nums[last] = temp;
        last--;
        i++;
      } else { last--; }
    } else { i++; }
  }
  return nums;
};