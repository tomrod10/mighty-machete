/* [Two Sum]
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

// Solution - Time O(n) | Space O(n)
const twoSum = (nums, target) => {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    let idx2 = map.get(complement) ? map.get(complement) : undefined;
    if (idx2 && idx2 !== i) {
      if (!result.length) {
        result.push(idx2, i)
      }
    }
  }
  return result;
}

// Alternate Solution - Time O(n) | Space O(n) by kabanusha28
const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const difference = target - val;

    if (map.has(val)) {
      return [map.get(val), i]
    }

    map.set(difference, i);
  }
};