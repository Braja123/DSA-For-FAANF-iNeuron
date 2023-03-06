// Check the number is available in the array or not, if available then return the index.

const linearSearch = (arr, x) => {
  for(let i=0; i<arr.length-1; i++) {
    if(arr[i] === x) {
      return i;
    }
  }
  return -1;
}


let arr = [20, 45, 27, 47, 55, 65, 75, 88, 90]
let x = 65

let res = linearSearch(arr, x);
console.log(res);



// Time Complexity: O(n)
// Space Complexity: O(1)