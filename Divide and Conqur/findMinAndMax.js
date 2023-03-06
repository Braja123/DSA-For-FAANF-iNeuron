// Find Minimum and maximum number of an array.

let findMinMax = (arr, i, j) => {
  if (i == j) {
    return [arr[i], arr[j]];
  }
  if (i == j - 1) {
    if (arr[i] > arr[j]) {
      return [arr[i], arr[j]];
    } else {
      return [arr[j], arr[i]];
    }
  }
  // 1. Divide
  let mid = Math.floor(i + (j-i) / 2);
  // 2. Recursion -> conqure
  let left = findMinMax(arr, i, mid);
  let right = findMinMax(arr, mid + 1, j);

  // 3. Combine
  // To find final Min and max value
  let max = Math.max(left[0], right[0]);
  let min = Math.min(left[1], right[1]);

  return [max, min];
};
let arr = [20, 39, 45, 65, 21, 44, 89, 92];
let i = 0;
let j = arr.length - 1;

let res = findMinMax(arr, i, j);
console.log(res);


// Time Complexity: O(N)
// Space Complexity: O(1)