// Longest Common Sequence
// I/O - getLCS("bda", "abcda")
// O/P - 3

// Need to do in normal recursion
// let s1 = ['b', 'd'];
// let s2 = ['a', 'b', 'c', 'd'];
// const lcs = () => {

// }


// By using Memoization

// const dpMemoizedLCS = (string1, string2, position1, position2, memoizeMatrix) => {
//   // Check if the function call has already been made and if the value has been memoized in the memoize matrix where m is the position of the string1 and n is the position of string2. If there is a value we can directly return that only.
//   if(memoizeMatrix[position1] && memoizeMatrix[position1][position2]) {
//     return memoizeMatrix[position1][position2];
//   }

//   // Here we check if any of the string has ended then we simply return 0 as no character is matched there.
//   if(position1 > string1.length - 1 || position2 > string2.length - 1) {
//     return 0;
//   }

//   // We initialize a variable for the length of matching string from here on as 0.
//   let currentLength = 0;

//   // Then we check the character is same at both the position, then can update the length of the maxMatchedLength by 1. Also call the same function recursively with position1 + 1 and positionn2 + 1 and add the result return by it to the maxMatchedLength. Also set memoizeMatrix[position1][position2] to maxMatchedLength, making it as the max length that can be achieved by that combination.
//   if(string1.charAt(position1) === string2.charAt(position2)) {
//     currentLength = 1 + dpMemoizedLCS(string1, string2, position1 + 1, position2 + 1, memoizeMatrix);

//     memoizeMatrix[position1][position2] = currentLength;
//   }  

//   // If it is not the case, then we need to consider both the cases where we increase the position1 by 1 and then increase the position2 by 1. Now we need to do compare the result return by both. Whichever, is greater we can simply take that into consideration and set maxMatchedLength as the that value. Also set memoizeMatrix[position1][position2] to maxMatchedLength, making it as the max length that can be achieved by that combination.
//   else {
//     currentLength = Math.max(dpMemoizedLCS(string1, string2, position1 + 1, position2, memoizeMatrix), dpMemoizedLCS(string1, string2, position1, position2 + 1, memoizeMatrix));

//     memoizeMatrix[position1][position2] = currentLength;

//   }

//   // Finally return the maxMatchedLength
//   return currentLength;

// }

// // This function  call the function dpMemoizedLCS with required params
// const getLCS = (string1, string2) => {
//   // This is the main matrix to store the memoized values where we have m (length of string 1 ) number of rows and n (length of string 2) number of columns.
//   let memoizeMatrix = [];
//   for(let i=0; i<string1.length; i++) {
//     memoizeMatrix.push(new Array(string2.length));
//   }
//   return dpMemoizedLCS(string1, string2, 0, 0, memoizeMatrix);
// }

// // Driver Code
// console.log(getLCS("bda", "abcda"));


// Not Resolved
// By Using Tabulation
let string1 = "BD";
let string2 = "ABCD";

const lcs = (x, y) => {
  // find the length of the strings
  // m - number of rows
  // n - number of columns
  let m = x.length;
  let n = y.length;

  // declaring the array for storing the dp values
  // ****************Don't know how to write in JS Need to check**********************************
  let LCS_table = [];

  for(let i=0; i<m+1; i++) {
    for(let j=0; j<n+1; j++) {
      // base condition
      if(i===0 || j===0) {
        LCS_table[i][j] = 0;
      } 
      // if there is a match of characters in string1 and string2
      else if(x[i-1] === y[j-1]) {
        LCS_table[i][j] = 1 + LCS_table[i-1][j-1]
      } else {
        LCS_table[i][j] = Math.max(LCS_table[i-1][j], LCS_table[i][j-1])
      }
    }
  }
  return LCS_table[m][n];
}

// function calling
console.log(lcs(string1, string2));