/*
[LeetCode #238 Product of Array Except Self]

Prompt:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the
elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]


Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

// My initial attempt of writing a solution within the constraints.
// Unfortunately, it only passes 19/20 tests. This algorithm can't
// handle large inputs quickly.
var productExceptSelf1 = function(nums) {
  let products = [];
  let numIdx = 0;
  let count = 0;
  let product = 1;
  let numsLen = nums.length;

  for (let i = 0; i <= numsLen; i++) { // once true the loop ends
    if (products.length === numsLen) {
      return products;
    } else if (count === numsLen - 1) { // push n reset
      products.push(product);
      i = -1;
      numIdx++;
      count = 0;
      product = 1;
    } else {
      if (numIdx !== i) {
        product*= nums[i];
        count++;
      }
    }
  }
};

// This algorithm passes all the tests. Many posts in the
// discussion forum had very similar solutions to this one.
var productExceptSelf2 = function(nums) {
  let len = nums.length
  let answers = new Array(len);
  answers[0] = 1;

  for (let i = 1; i < len; i++) {
      answers[i] = nums[i - 1] * answers[i - 1];
  }

  let r = 1;
  for (let i = len - 1; i >= 0; i--) {
      answers[i] = answers[i] * r;
      r *= nums[i];
  }
  return answers;
};

let test = (arr) => {
  console.log(productExceptSelf2(arr));
}

test([1, 2, 3, 4]) // [24,12,8,6]