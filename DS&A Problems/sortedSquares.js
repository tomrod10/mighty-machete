/* [Squares of a Sorted Array] from LeetCode's explore - Array module

Prompt:
Given an integer array nums sorted in non-decreasing (ascending) order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

var sortedSquares = function(nums) {
  // input - sorted array of nums (ascending order)
  // output - sorted array of squared nums (ascending order)
  // constraint/s - sorted in ascending order
  // edge case/s - null, empty array input, invalid input

  // two parts:

  // 1 - square each value

  // 2 - sorting in ascending order

  // square all elements
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i]**2;
  }

  // sort all elements
  return nums.sort((a,b) => (
    a - b
  ));
};