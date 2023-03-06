// Median of Two Sorted Arrays (Apple)
// Given two sorted arrays num1 and num2 of size m and n respectively, return the median of the two sorted arrays.

// Median - 
    // - Sorted Array
    // If middle value of index is odd then fine
    // If middle value of index is even then take the middle 2 values of an array, divided by 2

let arr = [2,4,1];
let arr1 = [3,5,7];

// After sort - [1,2,3,4,5,7]

const median = (arr, arr1) => {
  let sortedArr1 = [...arr, ...arr1];
  let sortedArr = sortedArr1.sort((a, b) => a-b);

  let mid = Math.floor(sortedArr.length /2);
  if(arr[mid] % 2 !== 0) {
    return sortedArr[mid];
  } else {
    let evenMid = Math.floor((arr[mid] + arr[mid-1]) / 2);
    return sortedArr[evenMid];
  }
}

console.log(median(arr, arr1));
