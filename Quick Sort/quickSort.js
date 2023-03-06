let arr = [50, 70, 29, 67, 12, 15, 46];

let p = 0;
let q = arr.length-1;

const partition = (arr, p, q) => {
  let pivot = arr[p];
  let i = p;
  
  for(let j=i+1; j<q+1; j++) {
    if(pivot >= arr[j]) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[p], arr[i]] = [arr[i], arr[p]];
  return i;
}

const quickSort = (arr, p, q) => {
  if(p < q) {
    let mid = partition(arr, p, q);
    quickSort(arr, p, mid-1);
    quickSort(arr, mid+1, q);
  }
  return arr;
}

console.log(quickSort(arr, p, q));

// It is a Inplace sorting algorithm
// Time Complexity for the best and average case is = O(NlogN);
// Time Complexity for the Worst cast is = O(N^2)
// Space Complexity = O(1)