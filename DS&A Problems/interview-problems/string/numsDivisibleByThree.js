/* [Numbers Divisible by 3]
Prompt:
You are given a string (S), consisting of N digits, that represents a number.
You can change at most one digit in the string to any other. How many
different numbers divisible by 3 can be obtained in this way?

Examples:

1. Given string "23", the function should return 7. All
numbers divisible by 3 that can be obtained after at most
one change are: "03", "21", "24", "27", "33", "63", and "93".

2. Given string "0081", the function should return 11. All
numbers divisible by 3 that can be obtained with at most one
change are: "0021", "0051", "0081", "0084", "0087", "0381",
"0681", "0981", "3081", "6081", and "9081".

3. Given string "022", the function should return 9. All
numbers divisible by 3 that can be obtained with at most
one change are: "012", "021", "024", "027", "042", "072",
"222", "522", and "822".

Write an efficient algorithm for the following assumptions:
  - N is an integer within the range [1..100,000]
  - string S consists only of digits (0-9)
*/

var numsDivisibleByThree = function(S) {
  let ans = 0;
  let vals = [];
  let index = 0;
  let digit = 0;

  while(index < S.length) {
    // 0-9 each decimal place

    // set the current decimal place
    // string number to "0"
    // then turn it into a number

    // check if the current number is divisible 3
    // if so
      // increment ans counter

    // if the current num at decimal place is 9
      // reset the number to its input
      // move to the next decimal place
      // increment index
      // reset digit to 0
      // continue

    // incerement the num of the current decimal place
    // ex: current = S[index] = '' + (digit+=1)
  }
}

let test1 = numsDivisibleByThree("23");
let test2 = numsDivisibleByThree("0081");
let test3 = numsDivisibleByThree("022");

console.log(test1, test1 === 7);
console.log(test2, test2 === 11);
console.log(test3, test3 === 9);
