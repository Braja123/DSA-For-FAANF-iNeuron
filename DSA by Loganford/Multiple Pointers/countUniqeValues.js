// Implement a function called countUniqueValues, which accepts  a sorted array, and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted.


// This solution has made by using Frequency counter technique
let arr = [1,1,1,2,3,4,4,4];

// const countUniqueValues = (arr) => {
//   let freq = {};
//   let res = 0;
//   for(let i of arr) {
//     freq[i] = (freq[i] || 0) + 1;
//   }
//   for(let key in freq) {
//     res = key;
//   }
//   return res
// }

const countUniqueValues = (arr) => {
  if(arr.length === 0) return 0;
  let i = 0;
  
  for(let j=1; j<arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUniqueValues(arr));

// Time Complexity - 0(N)
// Space Cmplexity - 0(1)