/* Here will check the left and right value.
- And we have "minValue" which will store the index of minimum element inside - the array.
- But at first "minValue" will store the index of first element.
- If the left value is more compare to right value then swap
- Then update the "minValue" with the "index" of right value.
- So basically "minValue" is updated when we get less element.
- After that swap with the "Start Value" and "minValue"
*/ 


let arr = [70, 56, 23, 19, 25, 37, 48];

const selectionSort = (arr) => {
  let n = arr.length;
  for(let i=0; i<n; i++) {
    let min = i;
    for(let j=i+1; j<n; j++) {
      if(arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.log(selectionSort(arr));

// Time Complexity = Comparison + Swaps =  O(N^2) + O(N) = 0(n^2);
// Space Complexity = O(1)

// So here we have less "Swaps" as compare to "Bubble Sort"
// So it is good compare to "Bubble Sort"
