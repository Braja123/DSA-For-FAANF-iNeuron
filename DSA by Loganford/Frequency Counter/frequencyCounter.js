// Check first array value square is available in second array or not.

let arr = [1, 2, 3];
let arr1 = [9, 1, 7];

const frequencyCounter = (arr, arr1) => {
  if(arr.length !== arr1.length) return false;
  let freq = {};
  let freq1 = {};

  for(let char of arr) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for(let char of arr1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }
  
  for(let key in freq) {
    if(!(key**2 in freq1)) {
      return false;
    }
    if(freq1[key**2] !== freq[key]) {
      return false;
    }
  }
  return true;


}
console.log(frequencyCounter(arr, arr1));


// Time Complexity - 0(N)
// Space Cmplexity - 0(1)