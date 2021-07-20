/* [Max Consecutive Ones] from LeetCode's explore - Array module

Prompt:
Given a binary array nums, return the maximum number of consecutive 1's in the array.


Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2

*/

var findMaxConsecutiveOnes = function(nums) {
  let result = 0;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num === 1) {
      counter++;
      if (i === nums.length - 1) {
        counter > result ? result = counter : result;
      }
    } else {
      counter > result ? result = counter : result;
      counter = 0;
    }
  }
  return result;
};

let test1 = findMaxConsecutiveOnes([1,1,0,1,1,1]); // 3
let test2 = findMaxConsecutiveOnes([1,0,1,1,0,1]); // 2

console.log(test1);
console.log(test2);