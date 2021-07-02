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

// Time Complexity: O(n^2) - not so good!
var duplicateZeros = function(arr) {
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

// Alternate solution
// Time Complexity: O(n)
let possibleDups = 0;
let length = arr.length - 1;

// Find number of zeros to be duplicated
for (let left = 0; left <= length - possibleDups; left++) {
  if (arr[left] === 0) {
    if (left === length - possibleDups) {
      arr[length] = 0;
      length--;
      break;
    }
    possibleDups++;
  }
}

// Start backwards from the last element which would be part of new array
let last = length - possibleDups;

// Copy zero twice, and non zero once
for (let i = last; i >= 0; i--) {
  if (arr[i] === 0) {
    arr[i + possibleDups] = 0;
    possibleDups--;
    arr[i + possibleDups] = 0;
  } else {
    arr[i + possibleDups] = arr[i];
  }
}