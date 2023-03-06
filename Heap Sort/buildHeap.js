// Create a Minheap

// let arr = [145, 40, 25, 65, 12, 48, 18];
// let n = arr.length-1;

const heapify = (arr, n, i) => {
  let smallest = i;
  let left = 2*i+1;
  let right = 2*i+2;
  if(arr[left] < arr[smallest]) {
    smallest = left;
  } else if(arr[right] < arr[smallest]) {
    smallest = right;
  }
  heapify(arr, n, i);
}

const buildHeap = (arr) => {
  let n = arr.length - 1;
  let startIndex = (n/2) - 1;
  for(let i=startIndex; i>=0; i--) {
    heapify(arr, n, i);
  }
}

console.log(buildHeap([145, 40, 25, 65, 12, 48, 18]));
