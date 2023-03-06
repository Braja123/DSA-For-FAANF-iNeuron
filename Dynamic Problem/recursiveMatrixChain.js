// matrix chain multiplication using recursion

// import sys   - Python Code

// Matrix A[i] has dimension p[i-1] x p[i]
// for i = 1..n
const MatrixChainOrder = (p, i, j) => {
	// base case condition
	if (i == j) {
		return 0
	}

	// let minVal = sys.maxsize			- Python code
	let minVal = 1000;

	// Place parenthesis at different places
	// between first and last matrix,
	// recursively calculate count of multiplications
	// for each parenthesis placement
	// and return the minimum count
	for (let k=i; k<j; k++) {
		// recursive call
		let count = (MatrixChainOrder(p, i, k)
				+ MatrixChainOrder(p, k + 1, j)
				+ p[i-1] * p[k] * p[j])

		if (count < minVal) {
			minVal = count
		}
	}

	// Return minimum count
	return minVal
}

// Driver code
// if __name__ == '__main__':
	let arr = [1, 3, 1, 2, 3]
	let N = arr.length;
	
	// Function call
	console.log("Minimum number of multiplications is ", MatrixChainOrder(arr, 1, N-1))


