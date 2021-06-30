/*
[LeetCode #11 Container With Most Water]
https://leetcode.com/problems/container-with-most-water/

Prompt:
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Examples:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Input: height = [1,1]
Output: 1

Input: height = [4,3,2,1,4]
Output: 16

Input: height = [1,2,1]
Output: 2

Myself and friend of my mine found the prompt to be too vague. We both looked
at the hints and found out how we were meant to find the max area of the
water container.

In short, you start on both ends of the container and on each iteration
check for the shortest of the two coordinates/bars and multiply its value
with the distance between the coordinates/bars. Then, move towards the
center of the container the shortest of the two coordinates/bars by one.
*/

// My initial approach was the naive/brute force way
// where I implemented a nested loop achieving
// the results in O(n^2) time complexity. Unfortunaly,
// it exceeded the time limit.

// The better and acceptable solution runs in O(n)
var maxArea = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

let test1 = maxArea([1,8,6,2,5,4,8,3,7]); // 49
let test2 = maxArea([1,1]); // 1
let test3 = maxArea([4,3,2,1,4]); // 16
let test4 = maxArea([1,2,1]) // 2
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

