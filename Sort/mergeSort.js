let arr = [50, 70, 65, 13, 80, 62, 98, 27];

let i = 0;
let j = arr.length-1;

const mergeSort = (arr, i, j) => {
  if(i < j) {

    // Divide
    let mid = i + (j-i) / 2;

    // Conquer
    // recursive call -> left tree
    mergeSort(arr, i, mid);
    // recursive call -> right tree
    mergeSort(arr, mid+1, j);

    // Combine

  }
}
console.log(mergeSort(arr, i, j));