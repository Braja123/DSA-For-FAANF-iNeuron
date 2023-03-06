// 1. Sum Of Subset 
// Problem: Given a set of non-negative integers, and a value sum, determine if
// there is a subset of the given set with a sum equal to the given sum value.
// Input: {3, 34, 4, 12, 5, 2}, sum = 9
// Output: True
// Explanation: There is a subset (4,5) with the sum as 9
// Hint: The brute force approach is not acceptable, try to give me an optimized solution using
// dynamic programming, refer 0-1 knapsack solution discussed in the live session to approach the
// solution of this problem.
// A recursive solution for subset sum
// problem

// Returns true if there is a subset
// of set[] with sun equal to given sum

// Brute Force Approach
const isSubsetSum = (set, n, sum) => {

  // Base Cases
    if (sum == 0) return true;
    if (n == 0) return false;
  
    // If last element is greater than
    // sum, then ignore it
    if (set[n - 1] > sum) {
      // element excluded
      return isSubsetSum(set, n - 1, sum)
    }
    // else, check if sum can be obtained
    // by any of the following
    // (a) including the last element
    // (b) excluding the last element
    return isSubsetSum(set, n-1, sum) || isSubsetSum(set, n-1, sum-set[n-1]);
    }
  
  // Driver code
  let set = [3, 34, 4, 12, 5, 2]
  let sum = 9;
  let n = set.length;
  // function calling
  if(isSubsetSum(set, n, sum) === true) {
    console.log("Found a subset with given sum");
  } else {
    console.log("No subset with given sum")
  }
  
  // Time Comlexity: O(2^N)
  // Space Complexity: O(1)