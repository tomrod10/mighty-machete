/*
Problem from [DS&A Course by Colt Steele]

Prompt:
This function takes in two strings and checks whether
the characters in the first string form a subsequence
of the characters in the second string. In other words,
the function should check whether the characters in the
first string appeard somewhere in the second string,
without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) { return true; }
  while(j < str2.length) {
    if (str2[j] === str1[i]) { i++; }
    if (i === str1.length) { return true; }
    j++;
  }
  return false;
}
