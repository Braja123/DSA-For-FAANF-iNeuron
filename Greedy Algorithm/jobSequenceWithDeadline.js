// Not Resolved

// Job Sequence with deadline

// arr contains 3 columns: [Job Number, Profit, Deadline]
// Constraints: Every job needs to be completed before or equal to the given deadline
// Optimization: Maximum Profit
let arr = [
  ['J1', 55, 5],
  ['J2', 65, 2],
  ['J3', 75, 7],
  ['J4', 60, 3],
  ['J5', 70, 2],
  ['J6', 50, 1],
  ['J7', 85, 4],
  ['J8', 68, 5],
  ['J9', 45, 3]
]

let maxDeadline = 7;

// Method Definition
const jobScheduling = (arr, maxDeadline) => {
  let n = arr.length;
  // sort the array on the basis of profit descending order
  // arr.sort(key= lambda x:x[1], reverse=True)
}


jobScheduling(arr, maxDeadline);