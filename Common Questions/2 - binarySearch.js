// Find the given number index
// Need to check the mid value(what ot use: floor or ceil)

let arr = [20, 30, 40, 50, 60, 70, 99];
let num = 70;
let i = 0;
let j = arr.length - 1;


// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length-1;
//   while(left <= right) {
//     let mid = (left + right) / 2;
//     if(arr[mid] === num) {
//       return mid;
//     } else if(arr[mid] < num) {
//       left = mid+1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(arr, 70));


// Another Approach  - Recursion
const binarySearch = (arr, num, i, j) => {
  while(i <= j) {
    let mid = Math.floor(i + (j-i) / 2);
    // let mid = (i + j)/ 2;
    if(arr[mid] === num) {
      return mid;
    } else if(arr[mid] < num) {
      return binarySearch(arr, num, mid+1, j);
    } else {
      return binarySearch(arr, num, i, mid-1);
    }
  }
  return -1;
}

console.log(binarySearch(arr, num, i, j));

// By using Master / Recursive Theorm
// Time Complexity - 0(log2n) = 0(logn)
