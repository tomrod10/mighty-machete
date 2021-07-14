/*
Problem from [DS&A Course by Colt Steele]

Prompt:
Write a function that accepts two paramenters -
an array of positive integers and a positive integer.

This function should return the minimal length of a
contiguous subarray of which the sum is greater than
or equal to the integer passed to the function. If
there isn't one, return 0 instead.

Examples:
minSubarrayLen([2,3,1,2,4,3], 7); // 2 -> because [4,3] is the smallest subarray
minSubarrayLen([2,1,6,5,4], 9); // 2 -> because [5,2] is the smallest subarray
minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1 -> because [62] is greater than 52
minSubarrayLen([1,4,16,22,5,7,8,9,10], 39); // 3
minSubarrayLen([1,4,16,22,5,7,8,9,10], 55); // 5
minSubarrayLen([4,3,3,8,1,2,3], 11); // 2
minSubarrayLen([1,4,16,22,5,7,8,9,10], 95); // 0
*/

let minSubarrayLen = (nums, int) => {
  // input - positive int array, positive int value
  // output - the minimal length of a subarray whose sum is >= int
  // constraint/s - Time O(n) | Space O(1)
  // edge case/s - empty array | invalid inputs
}
