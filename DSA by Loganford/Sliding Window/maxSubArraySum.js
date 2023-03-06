// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

let arr = [1,2,5,2,8,1,5];

// o/p - 10

// This is the Brute Force approach
// Time Complexity - 0(N^2)
// Space Cmplexity - 0(1)
// const maxSubarraySum = (arr, n) => {
//   if(n > arr.length) return null;
//   let max = -Infinity;
//   for(let i=0; i<arr.length - n + 1; i++) {
//     let temp = 0;
//     for(let j=0; j<n; j++) {
//       temp += arr[i + j];
//     }
//     if(temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }



const maxSubarraySum = (arr, num) => {
  if(num > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;

  for(let i=0; i<num; i++) {
    maxSum += arr[i]; 
  }

  tempSum = maxSum;

  for(let i=num; i<arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log((maxSubarraySum(arr, 2)));


// Time Complexity - 0(N)
// Space Cmplexity - 0(1)