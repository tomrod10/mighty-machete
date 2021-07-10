/* [Replace Elements with Greatest Element on Right Side] from LeetCode's explore - Array module

Prompt:
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation:
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

*/

// Solution | Time O(n) | Space O(1) | Runtime 352 ms
var replaceElements = function(arr) {
  if (!Array.isArray(arr) || arr.length < 1) { return []; }

  if (arr.length === 1) {
    arr[0] = -1;
    return arr;
  }

  let i = 0;
  let j = i+1;
  let max = 0;

  while(j < arr.length) {
    if (arr[j] > max) {
      max = arr[j];
    }
    if (j === arr.length-1) {
      if (i === arr.length-2) { arr[i] = arr[j]; }
      arr[i] = max;
      max = 0;
      i++;
      j = i+1;
      continue;
    }
    j++;
  }
  arr[arr.length-1] = -1;
  return arr;
};

// Alternate Solution by menothe | Time O(n) | Space O(1) | Runtime 100 ms
var replaceElements = function(arr) {
  let last = arr[arr.length - 1];
  arr[arr.length-1] = -1;
  let temp;
  for (let i = arr.length - 2; i >= 0; i--) {
      temp = arr[i];
      arr[i] = last;
      if (temp > last) {
          last = temp;
      }
  }
  return arr;
};