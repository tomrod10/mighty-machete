/*
Problem from [DS&A Course by Colt Steele]

Prompt:
Implement a function that accepts a variable number of
arguments and checks whether there are any duplicates among
the arguments passed in. You can solve this using the
frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

Constraints - Time O(n) | Space O(n)
Bonus - Time O(n log n) | Space(1)
*/

function areThereDuplicates() {
  let args = [...arguments];
  let i = 0;
  let j = i+1;

  while (args[j]) {
    if (args[i] === args[j]) { return true; }

    if (j === args.length - 1) {
      i++;
      j = i+1;
    }

    if (args[i] !== args[j]) { j++; }
  }
  return false;
}

let test1 = areThereDuplicates(1, 2, 3); // false
let test2 = areThereDuplicates(1, 2, 2); // true
let test3 = areThereDuplicates('a', 'b', 'c', 'a') // true

console.log(test1);
console.log(test2);
console.log(test3);
