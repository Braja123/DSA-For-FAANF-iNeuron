// 4. Majority Element [Amazon, Google]
// Given array nums of size n, return the majority element present in the array.
// Assume that the majority element always exists in an array.
// For example:
// Nums = [2, 2, 1, 1, 1, 2, ,2]
// Output: 2

// let arr = [2, 2, 1, 1, 1,1,1, 2, 2];

// const majorityElement = (arr) => {
//   // let arr = arr1.sort((a, b) => a-b);
//   console.log(arr);
//   let freq = {};

//   for(let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }
//   console.log(freq);
//   let max = 0;
//   for(let key in freq) {
//     if(max < freq[key]) {
//       max = freq[key];
//     }
//   }
//   // console.log(max);
//   for(let key in freq) {
//     if(max == freq[key]) {
//       return key;
//     }
//   }
// }
// console.log(majorityElement(arr));

// Time Complexity: O(n)
// Space Complexity: O(n)
// As we are storing the value in "freq" object so the Space Complexity is O(n)

// Check Boyer-Moore Voting Algorithm for Space Com. O(1);

// Boyer-Moore Voting Algorithm

// Not Resolved Need to check with iNeuron

// let arr = [2, 2, 1, 1, 2, 2, 3, 3];
let arr = [2, 3, 7, 3, 4];

const findCandidate = (arr) => {
  let candidate = null;
  let count = 0;

  for(let num of arr) {
    if(count == 0) {
      candidate = num;
    }
    if(num == candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
}

const isMajorityElement = (arr, candidate) => {
  let count = 0
  let n = Math.floor(arr.length/2);
  for(let i=0; i<arr.length; i++) {
    if(arr[i] == candidate) {
      count++;
    }
  }
  if(count > n) {
    return 1;
  } else {
    return -1;
  }
}

const majorityElement = (arr) => {
  let cand = findCandidate(arr);
  if(isMajorityElement(arr, cand)) {
    console.log("majority Element is", cand);
  } else {
    console.log("No majority Element Exist in an array");
  }
}

console.log(majorityElement(arr));