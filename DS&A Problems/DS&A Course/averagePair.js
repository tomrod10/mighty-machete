/*
Problem from [DS&A Course by Colt Steele]

Prompt:
Given a sorted array of integers and a target average,
determine if there is a pair of values in the array
where the average of the pair equals the target average.
There may be more than one pair that matches the
average target.

Examples:
averagePair([1,2,3],  2.5); // true
averagePair([1,3,3,5,6,7,10,12,19], 8); // true
averagePair([-1,0,3,4,5,6], 4.1); // false
averagePair([], 4); // false
*/

console.time('abc');
let averagePair = (arr, target) => {
  let i = 0;
  let j = 1;

  while(i < arr.length) {
    if (i !== j) {
      if ((arr[i] + arr[j]) / 2 === target) {
        return true;
      }
    }
    if (j === arr.length - 1) {
      i++;
      j =  0;
    }
    j++;
  }
  return false;
  let end = performance.now();
}

let test1 = averagePair([1,2,3],  2.5); // true
console.timeEnd('abc');

console.log(test1);