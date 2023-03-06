/*Here will check the left and right value
If the left value is more compare to right vlaue then swap
After swap check with next value and so on

*/ 

let arr1 = [70, 20, 50, 60, 35, 47];

const bubbleSort = (arr) => {
  let n = arr.length;
  for(let i=0; i<n; i++) {
    // used "j<n-i-1" so that we can not go to the last element as Bubble sort after swap last element is any how greater than other element
    for(let j=0; j<n-i-1; j++) {
      if(arr[j] > arr[j+1]) {
        // console.log("Before Swap ", arr[j], arr[j+1]);
        // swap of the element
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
      // console.log("AfterSwap ",arr[j], arr[j+1]);
    }
  // console.log(arr);
  }
  return arr;
}

console.log(bubbleSort(arr1));


// Time Complexity = Comparison + Swaps =  O(N^2) + O(N^2) = 0(n^2);
// Space Complexity = O(1)