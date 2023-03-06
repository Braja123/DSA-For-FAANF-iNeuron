// 2. Sort Colors [Amazon]
// Given array nums with n objects colored red, white, or blue, sort them in place so that the objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
// Solve this question without using the library sort function.
// For example:
// Nums = [2,0,2,1,1,0]
// Result = [0,0,1,1,2,2]


// let arr = [2,0,2,1,1,0];

// let p = 0;
// let q = arr.length-1;

// const partition = (arr, p, q) => {
//   let pivot = arr[p];
//   let i = p;
  
//   for(let j=i+1; j<q+1; j++) {
//     if(pivot >= arr[j]) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   [arr[p], arr[i]] = [arr[i], arr[p]];
//   return i;
// }

// const sortColors = (arr, p, q) => {
//   if(p < q) {
//     let mid = partition(arr, p, q);
//     sortColors(arr, p, mid-1);
//     sortColors(arr, mid+1, q);
//   }
//   return arr;
// }

// console.log(sortColors(arr, p, q));

// Time Complexity: O(NlogN)




// Best Approach
let arr = [2,0,2,1,1,0];

const sortColors = (arr) => {
  let p0 = 0;
  let curr = p0;
  let p2 = arr.length-1;

  while(curr <= p2) {
    if(arr[curr] == 0) {
      [arr[p0], arr[curr]] = [arr[curr], arr[p0]];
      p0++;
      curr++;
    }
    if(arr[curr] == 2) {
      [arr[p2], arr[curr]] = [arr[curr], arr[p2]];
      p2--;
    } else {
      curr++;
    }
  }
  return arr;
}

console.log(sortColors(arr));

// Time Complexity: O(n)
// Space Complexity: O(1)