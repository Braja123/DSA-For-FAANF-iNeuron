// Not Getting the result

let arr = [50, 70, 29, 67, 12, 15, 46];

let p = 0;
let q = arr.length-1;

const randomizedPartition = (arr, p, q) => {

  // random pivot index
  let randomPivotIndex = Math.floor(Math.random() * p);
  // swap the random index with the first index
  [arr[p], arr[randomPivotIndex]] = [arr[randomPivotIndex], arr[p]];
  return partition(arr, p, q);
}

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
    let mid = randomizedPartition(arr, p, q);
    quickSort(arr, p, mid-1);
    quickSort(arr, mid+1, q);
  }
  return arr;
}

console.log(quickSort(arr, p, q));