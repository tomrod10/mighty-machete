/* [Fibonacci Number]

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

// Solution
var fib = function(n) {
  class Fib {
    constructor() {
      this.memo = {};
    }

    nthFib(n) {
      let result;
      if (this.memo[n]) return this.memo[n];
      if (n === 0 || n === 1) return n;
      result = this.nthFib(n-1) + this.nthFib(n-2);
      this.memo[n] = result;
      return result;
    }
  }
  let findFib = new Fib();
  return findFib.nthFib(n);
};

/*
[Tail Recursion Solution]

Note: This works at its best if your coding
language supports Tail Call Optimization (TCO)

Each recursive call of 'go'
we check if n hits any of the two conditionals
if not, we call go, decrement n by 1, pass b as a,
and we generate the next fibonacci number by adding
a to b. We are basically doing a sliding window
method on each call. Finally, one of the base
cases ends the recursion and returns the nth
fibonacci number.

The reason why this is efficient is due
to the go function being Tail Recursive.
This means that the last thing the function
does is make a recursive call and not any
further calculations. It's for this reason
that there's nothing to remember or store
in memory in each stack for later calculations
when stack collapses.
*/
const go = (n, a, b) => {
  if (n === 0) return a;
  if (n === 1) return b;
  go(n-1, b, a+b)
}

const fib = (n) => {
  return go(n, 0, 1);
};