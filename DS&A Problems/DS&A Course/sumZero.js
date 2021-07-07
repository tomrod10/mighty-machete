/*
Problem from [DS&A Course by Colt Steele]

Prompt:
Write a function called sumZero which accepts a sorted
array of integers. The function should find the first
pair where the sum is zero. Return an array that includes
both values that sum to zero or undefined if a pair
does not exist.

Note:
This problem makes use of the multiple pointer approach.

Example 1:
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]

Exaple 2:
sumZero([-2,0,1,3]) // undefined

Example 3:
sumZero([1,2,3]) // undefined
*/

// Solution | Time Complexity: O(n) | Space Complexity: O(1)
let sumZero = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }

  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    if (arr[start] + arr[end] === 0) {
      return [arr[start], arr[end]];
    } else if (arr[start] + arr[end] > 0) {
      end--;
    } else {
      start++;
    }
  }
  return undefined;
}

let test1 = sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]
let test2 = sumZero([-2,0,1,3]); // undefined
let test3 = sumZero([1,2,3]); // undefined
let test4 = sumZero([-2,-1,0,1,3]); // [-1,1]

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
