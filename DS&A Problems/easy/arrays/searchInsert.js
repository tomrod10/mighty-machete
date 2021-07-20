/* [Search Insert Position] from LeetCode's explore - Array module

Prompt:
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:
Input: nums = [1], target = 0
Output: 0
*/

// Solution
var searchInsert = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while(i <= j) {
    let mid = Math.floor((j + i) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return i;
};

let test1 = searchInsert([1,3,5,6], 5); // 2
let test2 = searchInsert([1,3,5,6], 7); // 4
let test3 = searchInsert([1,3,5,6], 2); // 1
let test4 = searchInsert([1], 0); // 0

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);


