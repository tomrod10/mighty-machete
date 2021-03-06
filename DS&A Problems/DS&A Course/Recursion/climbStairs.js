/* [Climbing Stairs]

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// Solution
var climbStairs = function(n) {
  class ClimbStairs {
    constructor() {
      this.memo = {};
    }

    waysToClimb(n) {
      if (this.memo[n]) return this.memo[n];
      let count = 0;
      if (n < 0) return 0;
      if (n === 0) return ++count;
      count += this.waysToClimb(n-1);
      count += this.waysToClimb(n-2);
      this.memo[n] = count;
      return count;
    }
  }
  let climb = new ClimbStairs();
  return climb.waysToClimb(n);
};

// DP Solution
var climbStairs = function(n) {
  let waysToClimb = [];
  waysToClimb[0] = 1;
  waysToClimb[1] = 1;
  for (let i = 2; i <= n; i++) {
    waysToClimb[i] = waysToClimb[i-1] + waysToClimb[i-2];
  }
  return waysToClimb[n]
};

// Tail Recursion Solution
const go = (i, n, arr) => {
  if (i > n) return arr[n];
  arr[i] = arr[i-1] + arr[i-2]
  return go(i+1, n, arr)
}

const climbStairs = (n) => {
  return go(2, n, [1, 1]);
};