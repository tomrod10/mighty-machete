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

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    }
    // current total less than required total but we reach the end,
    // need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
debugger;
let test1 = minSubArrayLen([1,2,5,2,8,1,5], 10) //
let test2 = minSubArrayLen([1,2,5,2,1,5], 9) //
let test3 = minSubArrayLen([4,2,1,6], 1) //
let test4 = minSubArrayLen([2,2,2,2], 8) //
let test5 = minSubArrayLen([], 4) // null

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
