/*
[LeetCode #7 Reverse Integer]
https://leetcode.com/problems/reverse-integer/

Prompt:
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
*/

var reverse = function(n) {
  let neg = n < 0;
  let reverse = 0;
  n = Math.abs(n);
  let hiBound = Math.pow(2, 31) - 1;

  while(n) {
    reverse = reverse * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  if (reverse > hiBound) {
    return 0;
  }

  if (neg) {
    return -reverse
  } else {
    return reverse;
  }
};

