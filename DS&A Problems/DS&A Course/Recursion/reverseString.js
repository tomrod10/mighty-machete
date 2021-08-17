/* [Reverse String]

Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// Solution
var reverseString = function(s) {
  let last = s.length - 1;
  const reverse = function(left, right) {
    if (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      reverse(left+1, right-1);
    }
  }
  reverse(0, s.length-1);
  return s;
};