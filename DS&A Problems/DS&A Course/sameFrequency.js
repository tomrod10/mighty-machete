/*
Problem from [DS&A Course by Colt Steele]

Prompt:
Write a function that takes two positive integers.
Find out if the two numbers have the frequency of digits.

Constraints - Time Complexity O(n)

Examples:
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

both inputs need to have the same length
and the same digits
*/

// input - postive ints
// output - bool | whether inputs follow this:
  // both inputs need to have the same length and the same digits
// constraint/s - Time Complexity O(n) | Positive ints as input
// edge case/s - invalid inputs | null | different lengths

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  let i = 0;
  let j = 0;
  let isMatch = false;

  while (i < num1.length) {
    if (num1[i] !== num2[j]) { j++; }

    if (num1[i] === num2[j]) {
      i++;
      j = 0;
      isMatch = true;
    }

    if (j === num1.length - 1 && !isMatch) { return false; }
  }
  return isMatch;
}

let test1 = sameFrequency(182,281); // true
let test2 = sameFrequency(14,34); // false
let test3 = sameFrequency(3589578, 5879385); // true
let test4 = sameFrequency(22, 222); // false


console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
