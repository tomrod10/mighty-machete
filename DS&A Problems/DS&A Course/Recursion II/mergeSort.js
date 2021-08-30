/* [Sort an Array]

Given an array of integers nums, sort the array in ascending order.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
*/

// Solution
const merge = (left, right) => {
  let lPointer = 0;
  let rPointer = 0;
  let merged = []

  while(left[lPointer] !== undefined && right[rPointer] !== undefined) {
    if (left[lPointer] <= right[rPointer]) {
      merged.push(left[lPointer]);
      lPointer++;
    } else {
      merged.push(right[rPointer]);
      rPointer++;
    }
  }
    if (left[lPointer] === undefined) {
      return merged.concat(right.slice(rPointer));
    } else {
      return merged.concat(left.slice(lPointer));
    }
}

const sortArray = (array) => {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(sortArray(left), sortArray(right));
}