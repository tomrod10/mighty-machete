/* [Plus One] from LeetCode

Prompt:
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Each element in the array appears twice except for one element which appears only once.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

// Solution | Time O(n) | Space O(1)
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a,b) => (a-b));
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (i === 0) {
      if (nums[i] !== nums[j]) {
        return nums[i];
      } else {
        i++;
      }
    }
    if (nums[i] !== nums[j]) {
      if (nums[j] !== nums[j+1]) {
        return nums[j];
      }
      i = j;
    }
  }
};

let test1 = singleNumber([2,2,1]);
let test2 = singleNumber([4,1,2,1,2]);
let test3 = singleNumber([1]);

console.log(test1);
console.log(test2);
console.log(test3);
