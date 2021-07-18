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

// Solution
var findDisappearedNumbers = function(nums) {
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

// Alternate Solution by hbjORbj on LeetCode
var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      let idx = num-1;
      nums[idx] = Math.abs(nums[idx]) * -1;
  }
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) res.push(i+1);
  }
  return res;
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};
/*
We will scan through the input array and for every number we will use its value as an index and
negate the number at the index. For example, if we encounter 4, we will negate the number at index 3.
The reason the index is not four is because the array is zero-indexed.
*/