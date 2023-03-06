// Check the target number is present or not in 2D Array

// Brute Force approach
// const search2DArr = (arr, target) => {
//   // num of rows
//   let m = arr.length;
//   if (m === 0) return false;

//   // num of cols
//   let n = arr[0].length;

//   for(let i=0; i<m; i++) {
//     for(let j=0; j<n; j++) {
//       if(arr[i][j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;

// };

// Time Complexity: O(m*n)
// Space Complexity: O(1)

const search2DArr = (arr, target) => {
  // num of rows
  let m = arr.length;
  if (m === 0) return false;

  // num of cols
  let n = arr[0].length;

  let left = 0;
  let right = m * n - 1;

  // birany search implementation
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    let row_access = Math.floor(mid / n);
    let col_access = Math.floor(mid % n);

    console.log("inside arr mid", arr[row_access][col_access]);

    let mid_element = arr[row_access][col_access]; //Check 2D array in JS
    if (target === mid_element) {
      return true;
    } else if (target < mid_element) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

let arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 60;

console.log(search2DArr(arr, target));

// Time Complexity: O(log(m*n)
// Space Complexity: O(1)
