/* [Valid Mountain Array] from LeetCode's explore - Array module

Prompt:
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
*/

var findDisappearedNumbers = function(nums) {
  // input - array of ints
  // output - array of missing ints in range
  // constraint/s - Time O(n)
  // edge case/s - negative ints | empty array | null

  let missing = [];
  let n = nums.length;

  let uniqueNums = new Set(nums);
  for (let i = 1; i <= n; i++) {
    if (!uniqueNums.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};

let test1 = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
let test2 = findDisappearedNumbers([1,1]);

console.log(test1);
console.log(test2);
