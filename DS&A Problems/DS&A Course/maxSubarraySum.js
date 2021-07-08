/*
Problem from [DS&A Course by Colt Steele]

Prompt:
Write a function which accepts an array of integers and
a number called n. The function should calculate the
maximum sum of n consecutive elements in the array.

Examples:
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([4,2,1,6,2], 4) // 13
maxSubarraySum([], 4) // null

In this problem we go over the 'Sliding Window Pattern'.
It involves creating a window which can either be an array
or number from one position to another.

Ex:
[1,2,4,6,7,10] - Window of length 3
 .___.         - This window spans from index 0 to 2
               - We can move this window and do things

Depending on a certain condition, the window either increases
or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

Consider counting the max amount of consecutive
unique chars in a strings.

Ex:
'hellothere' - Here we make a window that checks and counts unique chars
let maxUniqueChars = 0;
1 - 'hel' | maxUniqueChars = 3
2 - 'lother' | maxUniqueChars = 6
3 - 'e' | maxUniqueChars = 6
*/

// Time complexity O(n) | Space complexity O(1)
let maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) { return null; }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}