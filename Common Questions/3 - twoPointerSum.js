// Find the sum of given data indexes

// o/p = (4, 5)
let arr = [20, 40, 60, 80, 90, 120, 240];
let data = 210;

const towPointerSum = (arr, value) => {
  let i = 0;
  let j = arr.length-1;

  console.log(i, j);
  
  while(i<=j) {
    console.log("inside while");
    let sumVal = arr[i] + arr[j];
    console.log(sumVal);
    if(sumVal === value) {
      console.log("inside first if");
      return [i, j];
    } else if(sumVal > value) {
      console.log("inside else if");
      j = j-1;
      // console.log(i, j);
    } else {
      i = i+1;
    }
  }
  return -1;
}

console.log(towPointerSum(arr, data));




// Time Complexity: O(n)
// Space Complexity: O(1)