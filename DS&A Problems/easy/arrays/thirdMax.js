/* [Valid Mountain Array] from LeetCode's explore - Array module

Prompt:
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

// Solution
var thirdMax = function (nums) {
	if (nums.length === 1) return nums[0];
	nums.sort((a, b) => b - a);
	nums = Array.from(new Set(nums));
	if (nums.length < 3) return nums[0];
	return nums[2];
};

let test1 = thirdMax([3,2,1]); // 1
let test2 = thirdMax([1,2]); // 2
let test3 = thirdMax([2,2,3,1]); // 1

console.log(test1);
console.log(test2);
console.log(test3);
