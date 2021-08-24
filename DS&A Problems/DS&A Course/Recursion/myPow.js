/*
[Pow(x, n)]

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25
*/

// Tail Recursion Solution
// Overflows the stack
const go = (base, pow, r) =>{
  if (pow === 0) return r;
  if (pow < 0) {
    pow++;
    r *= 1/base;
  }
  if (pow > 0) {
    pow--;
    r *= base;
  }
  return go(base, pow, r)
}

const myPow = (x, n) => {
  return go(x, n, 1);
};

// Alternate Solution - hiitsherby
var myPow = function(x, n) {
  if (n===0) return 1;

  let pow = Math.abs(n);

  let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;

  return n < 0 ? 1/result : result;
};
