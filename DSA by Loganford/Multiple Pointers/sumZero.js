// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

let arr = [-3, -2, -1, 0, 1, 2, 3];

// i = 0, j=arr.length-1

const sumZero = (arr) => {
  let i = 0;
  let j = arr.length-1;
  let sum;

  while(i < j) {
    sum = arr[i] + arr[j];
    if(sum === 0) {
      return [i, j];
    } else if(sum < 0) {
      i++;
    } else {
      j--;
    }
  }
}
console.log(sumZero(arr));


// Time Complexity - 0(N)
// Space Cmplexity - 0(1)