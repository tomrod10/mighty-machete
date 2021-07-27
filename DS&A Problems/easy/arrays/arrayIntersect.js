/* [Intersection of Two Arrays] from LeetCode's explore section

Prompt:
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

// Solution - Time O(n) | Space O(n) | Ran tests in 132 ms faster than 5% (AKA super slow)
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let intersections = new Set();
  for (let i = 0; i < nums2.length; i++) {
    console.log(nums2[i])
    if (set1.has(nums2[i])) intersections.add(nums2[i]);
  }
  return Array.from(intersections);
};

// Alternate solution 1 - Time O(n) | Space O(n) | Ran tests in 68 ms faster than 96.61% (faster)
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let intersections = [];

  for (let val of set1) {
    if (set2.has(val)) intersections.push(val);
  }
  return intersections;
};

// Alternate solution 2 - Time O(n) | Space O(1) by COrtez1
// [[ Assuming the inputs are sorted! ]]
const intersection = (A, B) => {
  const res = [];
  let pA = 0;
  let pB = 0;
  while (pA < A.length && pB < B.length) {
    if (A[pA] === B[pB]) {
      if (pA == 0 || A[pA] != A[pA - 1]) res.push(A[pA]);
      pA++;
      pB++;
    } else if (A[pA] < B[pB]) pA++;
    else pB++;
  }
  return res;
};


