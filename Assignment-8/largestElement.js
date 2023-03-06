// Need to do in Selection Procedure

// 3. Kth Largest Element in an array [Facebook]
// Given an integer array nums and an integer k, return the kth largest element present in an array.
// For example:
// arr = [40, 25, 68, 79, 52, 66, 89, 97]
// k = 2
// result = 89


let arr = [40, 25, 68, 79, 52, 66, 89, 97];
let p = 0;
let q = arr.length - 1;
let k = 2;

const partition = (arr, p, q) => {
  let pivot = arr[p];
  let i = p;
  for(let j=i+1; j<q+1; j++) {
    if(arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[p], arr[i]] = [arr[i], arr[p]];
  return i;
}

const largestElement = (arr, p, q) => {
  if(p < q) {
    let mid = partition(arr, p, q);
    largestElement(arr, p, mid-1);
    largestElement(arr, mid+1, q);
    let res = arr.sort((a, b) => b-a);
    return res[k-1];
  }
}

console.log(largestElement(arr, p, q));