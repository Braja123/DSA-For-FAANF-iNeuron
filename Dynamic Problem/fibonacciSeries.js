// Solve the fibonacci series problem using recursion

// Method Definition
// const fib = (n) => {
//   // base case condition
//   if (n == 0 || n == 1) {
//     return n
//   } else {
//     result = fib(n-1) + fib(n-2)
//     return result;
//   }
// }
// // Driver code
// // function calling
// console.log(fib(7));

// But when we use a large number to calculate fib value that takes long time to execute
// Ex: fib(50)

// **Observation:** Using recursion, we are getting an exponential time complexity(O(2^N)) and when value of n is small, it is giving us the result within few seconds but as the value of n is increasing, the time required to generate the results is too much.

// **Why it is taking too much time when n is quite high?**
// *   Overlapping subproblem - Recomputation of same subproblems again and again

// Solution of above problem(Overlapping subproblem):
// *   Dynamic Problem:
// 1.   Memoization(Top Down Approach)
// 2.   Tabulation(Bottom Up Approach)

// -----------------------------------------------------------------------------
// **Memoization:** Recursion but storing every recursive function call solution in a data structure
// let memo = [];

// // Method definition
// const fib_topDown = (n, memo) => {
//   let result = 0;
//   // storing of results of function call
//   if(memo[n]) {
//     return memo[n];
//   }
//   // base case condition
//   if (n == 0 || n == 1) {
//     result = n;
//   } else {
//     // recursive calls
//     result = fib_topDown(n-1, memo) + fib_topDown(n-2, memo);
//   }
//   memo[n] = result;
//   return result;
// }
// create a list to store the results of every function call
// function calling
// console.log(fib_topDown(2000, memo));

// Time Complexity: O(n)
// Space Complexity: O(n)

// -----------------------------------------------------------------------------
// Tabulation - Get rid of recursion itself
// const fib_bottomUp = (n) => {
//   let bottomUp = [];
//   // base case condition
//   bottomUp[0] = 0;
//   bottomUp[1] = 1;

//   // No recursive function call
//   for(let i=2; i<=n; i++) {
//     bottomUp[i] = bottomUp[i-1] + bottomUp[i-2]
//   }
//   return bottomUp[n];
// }
// console.log(fib_bottomUp(500));

// Time Complexity: O(n)
// Space Complexity: O(n)

// Here in Tabulation amd Memoization, they both have same Time and Space Complexity but the main difference is Tabulation is fast execution compare to Memoization as Tabulation is not using Recursion and Memoization is using Recursion.


const fib = (n) => {
  // base case condition
  let first = 0;
  let second = 1;

  // No recursive function call
  for(let i=2; i<=n; i++) {
    next = first + second;
    // Here we store the value of second variable in first variable
    // first = 1
    first = second;
    // Here we store the value of next variable which we get after addition in second variable
    // second = 1;
    second = next;
  }
  return next;
}
console.log(fib(7));
// Time Complexity: O(n)
// Space Complexity: O(1)

// This is the Most Optimized Solution