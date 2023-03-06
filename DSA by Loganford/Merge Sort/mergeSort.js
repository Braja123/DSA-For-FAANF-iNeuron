let arr = [2, 14, 99, 100];


const merge = (arr, arr1) => {
  let res = [];
  let i = 0;
  let j = 0;
  while(i < arr.length && j < arr1.length) {
    if(arr[i] < arr1[j]) {
      res.push(arr[i]);
      i++;
    } else {
      res.push(arr1[j]);
      j++;
    }
  }
  while(i < arr.length) {
    res.push(arr[i]);
    i++;
  }
  while(j < arr1.length) {
    res.push(arr1[j]);
    j++;
  }
  return res;
}

const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(arr));