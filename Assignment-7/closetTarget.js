// 1. Given an integer array nums of length n and an integer target, find three integers in nums
// such that the sum is closest to the target.[Amazon]
// You need to return the sum of three integers.
// For example:arr = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation: [-1+2+1] = 2 (The sum that is closest to the target is 2)

let arr = [-1, 2, 1, -4];
let target = 1;

const closestTarget = (arr, target) => {
  let closetSum = 1000;
  let sortArr = arr.sort((a,b) => a-b);
  for(let i=0; i<sortArr.length; i++) {
    let left = i+1;
    let right = arr.length - 1;

    while(left <= right) {
      let sum = arr[i] + arr[left] + arr[right];
      if(Math.abs(target - sum) < Math.abs(target - closetSum)) {
        closetSum = sum;
      } else if(sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closetSum;
}

let res = closestTarget(arr, target);
console.log(res);


// Time Complexity: O(n^2) - as we have 2 loops
// Space Complexity: O(1)