// Not Resolved - Only for line number 12 that I do not know how to define
// This is the memoization approach of
// 0 / 1 Knapsack in Python in simple
// we can say recursion + memoization = DP


// Method definition
// We initialize the matrix with -1 at first.
const knapsack = (wt, val, W, n) => {
  // *****************************Don't know how to write in JS
	// t = [[-1 for i in range(W + 1)] for j in range(n + 1)]
  let t = [];
	// base conditions
	if (n == 0 || W == 0) {
		return 0
  }

	// memoization approach is helpful
	// avoiding the problem of overlapping subproblems	
	if (t[n][W] != -1) {
		return t[n][W]
  }

	// two choices: Max(either we can skip the object or we can include the object)
	if (wt[n-1] <= W) {
		t[n][W] = max(
			// including the object
			// recursion
			val[n-1] + knapsack(
				wt, val, W-wt[n-1], n-1),
			// skipping the object
			// recursion
			knapsack(wt, val, W, n-1))
		return t[n][W]
  } else if( wt[n-1] > W) {
		// skip the object completely
		t[n][W] = knapsack(wt, val, W, n-1)
		return t[n][W]
  }
}

// driver code
// val is profit array
// W is the maximum capacity
let val = [60, 100, 120 ]
let wt = [10, 20, 30 ]
let W = 50
let n = val.length;
console.log(knapsack(wt, val, W, n));