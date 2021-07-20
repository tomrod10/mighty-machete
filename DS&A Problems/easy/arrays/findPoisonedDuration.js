/* [Teemo Attacking] from LeetCode

Prompt:
Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.

Example 1:
Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
Example 2:

Input: timeSeries = [1,2], duration = 2
Output: 3
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

*/

// Initial Solution - Fails on input [1,2,3,4,5,6,7,8,9], 1
// var findPoisonedDuration = function(timeSeries, duration) {
//   if (duration < 1) return 0;

//   let tD = timeSeries[0];
//   let curr = 0;
//   while(curr < timeSeries.length) {
//       if (tD >= timeSeries[curr] && tD <= (timeSeries[curr] + (duration - 1))) {
//         tD += (duration - 1);
//         curr += (duration - 2);
//       } else {
//         tD += duration;
//         curr++;
//       }
//   }
//   return tD;
// };

// Alternate Solution
var findPoisonedDuration = function(timeSeries, duration) {
  if (duration < 1) return 0;

  let tD = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    tD += Math.min((timeSeries[i + 1] - timeSeries[i]), duration);
  }
  return tD + duration;
};

let test1 = findPoisonedDuration([1,2], 2);
let test2 = findPoisonedDuration([1,2,3,4,5,6,7,8,9], 1);

console.log(test1);
console.log(test2);
