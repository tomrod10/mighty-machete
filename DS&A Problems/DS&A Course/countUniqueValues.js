// In this part of the DS&A course I went over
// another common pattern referred to as
// 'Multiple Pointers'. It can be used to count elements
// or find values in data that fulfill a condition.
// These pointers can move towards the end, beginning,
// or towards the middle of the given data.

// Implement a function which accepts a sorted
// array, and counts the unique values in it.
// There can be negative numbers in the array,
// but it will always be sorted.

// Examples:
// countUniqueValues([]) - 0
// countUniqueValues([1,1,1,1,1,2]) - 2
// countUniqueValues([-2,-1,-1,0,1,]) - 4

let countUniqueValues = arr => {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;
  while(j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }
  return i + 1;
}

let test1 = countUniqueValues([1,1,1,1,1,2]) // 2
let test2 = countUniqueValues([-2,-1,-1,0,1,]) // 4
console.log(test1);
console.log(test2);
