/* [Valid Mountain Array] from LeetCode's explore - Array module

Prompt:
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Visual Explanation:

         .
       .   .
     .       .
   .           .
 .
[0,2,3,4,5,2,1,0] - This is a valid mountain

         .
     . .   .
   .         .
 .             .
[0,2,3,3,5,2,1,0] - This is not valid because it doens't
                    go up and down strictly (check the two 3s)

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true
*/

var validMountainArray = function(arr) {
  // input - arr of ints
  // output - boolean | Whether it's a valid mountain
  // constraint/s - can only increase or decrease in movement. No flat spots.
  // edge case/s - invalid input | null | empty array | arr,length < 3

  // Is the arr sorted?

  if (arr.length < 3 || !Array.isArray(arr) || arr[0] > arr[1]) { return false; }

  let isMntn = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      isMntn = true;
      continue;
    }

    if (isMntn && arr[i] < arr[i+1]) {
      return false;
    } else if (arr[i] === arr[i+1]) {
      return false;
    }
  }
  return isMntn;
};
