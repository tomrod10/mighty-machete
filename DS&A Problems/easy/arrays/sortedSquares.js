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
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i]**2;
  }
  return nums.sort((a,b) => (a - b));
};

let test1 = sortedSquares([-4,-1,0,3,10]);
let test2 = sortedSquares([-7,-3,2,3,11]);

console.log(test1);
console.log(test2);