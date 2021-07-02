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
  // input - array of nums
  // output - max amount of consecutive ones
  // constraint/s - array contains only 0s and 1s
  // edge case/s - empty array or null value

  // create result variable
  // create counter variable

  // loop over our input array

  // check for valid element (1)
  // if valid
    // increment our counter by 1
  // if i === nums.length - 1
    // check if result < counter
      // if so, set result to counter
  // check if curVal === (0)
    // check if result < counter
      // if so, set result to counter
    // reset our counter
  // end of loop
  // return result

  // example run

  // result = 2;
  // counter = 3;

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
