/* [Duplicate Zeros] from LeetCode's explore - Array module

Prompt:
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
*/

var duplicateZeros = function(arr) {
  // [1,0,2,3,0,4,5,0]

  // in process:
  // [1,0,0,2,3,0,4,5]

  // end result:
  // [1,0,0,2,3,0,0,4]

  // input - array of nums
  // output - none
  // constraint/s - 0 <= arr[i] <= 9 | no returns | O(1) space complexity
  // edge case/s - empty array, null, invalid input

  // loop from the end of the array
  // shift values one place to the right
  // once idx(0) + 1 is reached
    // set it to zero (0)

    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) { break; }
      if (arr[i] === 0) {
        for (let j = arr.length - 2; j > i; j--) {
          arr[j + 1] = arr[j]
        }
        arr[i + 1] = 0;
        i++;
      }
    }
    return arr; // returning just for testing purposes
};

let test1 = duplicateZeros([1,0,2,3,0,4,5,0]); // [1,0,0,2,3,0,0,4]
console.log(test1);