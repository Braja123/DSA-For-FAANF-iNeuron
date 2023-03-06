// Not Resolved
// import sys

// ***********************Can not convert to JS code*************************
// dp = [[-1 for i in range(100)] for j in range(100)]
dp = [];

// Function for matrix chain multiplication
const matrixChainMemoised = (p, i, j) => {
	// base case condition
	if(i == j) {
		return 0
	}
	
	// already solved that subproblem
	if(dp[i][j] != -1) {
		return dp[i][j]
	}
	
	// dp[i][j] = sys.maxsize
	dp[i][j] = 1000;
	
	for (let k=i; k<j; k++) {
		// recursion call 
		dp[i][j] = min(dp[i][j], matrixChainMemoised(p, i, k) + matrixChainMemoised(p, k + 1, j)+ p[i - 1] * p[k] * p[j])
	}
	return dp[i][j];
}
const MatrixChainOrder = (p,n) => {
	let i = 1
	let j = n - 1
	return matrixChainMemoised(p, i, j)
}
// Driver Code
let arr = [1, 3, 1, 2, 3]
let n = arr.length;
console.log("Minimum number of multiplications is",MatrixChainOrder(arr, n))

