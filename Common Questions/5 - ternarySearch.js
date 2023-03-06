// Find the given number index using ternary search

let arr = [20, 25, 47, 56, 59, 63, 65, 79, 82];
let key = 56;

let i = 0;
let j = arr.length - 1;

const checkTernary = (arr, i, j, key) => {
  while( i <= j) {
    let mid1 = Math.floor(i + (j - i) / 3);
    let mid2 = Math.floor(j - (j - i) / 3);
    console.log(mid1, mid2);
    if(arr[mid1] === key) {
      return mid1;

    } else if(arr[mid2] === key) {
      return mid2;

      // First part of the Ternary search
    } else if(arr[mid1] > key) {
      return checkTernary(arr, i, mid1-1, key);

      // Third part of the Ternary search
    } else if(arr[mid2] < key) {    //check with original code
      return checkTernary(arr, mid2+1, j, key);

      // Second part of the Ternary search
    } else {
      return checkTernary(arr, mid1+1, mid2-1, key);
    }
  }
  // If the searching element is not present in the array
  return -1;
}
console.log(checkTernary(arr, i, j, key));



// Time Complexity - 0(log3n) = 0(logn) 