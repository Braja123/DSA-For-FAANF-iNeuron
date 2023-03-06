// Need to check with Ankan code


// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check. Since each
// version is developed based on the previous version, all the versions after a bad version
// are also bad. Suppose you have n version and you want to find out the first bad one,
// which causes all the following ones to be bad. Also, talk about the time complexity of
// your code.
// Test Cases:
// Input: [0,0,0,1,1,1,1,1,1]
// Output: 3
// Explanation: 0 indicates a good version and 1 indicates a bad version. So, the index of
// the first 1 is at 3. Thus, the output is 3


const goodAndBadVersion = (arr) => {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === 1) {
      return i;
    }
  }
}

// Input: [0,0,0,1,1,1,1,1,1]
// Output: 3

let arr = [0,0,0,1,1,1,1,1,1];

const res = goodAndBadVersion(arr);
console.log(res);



// Time Complexity: O(n)
// Space Complexity: O(1)