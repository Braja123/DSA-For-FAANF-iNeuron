// 1. Kth smallest element [Amazon]
// Given an array of n-elements and an integer k, find the kth smallest element present in an array.
// For example:
// arr = [40, 25, 68, 79, 52, 66, 89, 97]
// k = 2
// result = 40


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
  return i+1;
}


const smallestElement = (arr, p, q) => {
  if(p < q) {
    let mid = partition(arr, p, q);

    // This is called as selectionProcedure
    if(k == mid) {
      return arr[mid-1];
    } else if(k < mid) { 
      // search index left side    
      smallestElement(arr, p, mid-2);
    } else {
      // search index right side      
      smallestElement(arr, mid, q);
    }
  }
}

console.log(smallestElement(arr, p, q));
