let arr = [75, 90, 100, 95, 85, 80];

const insertionSort = (arr) => {

  for(let i=1; i<arr.length; i++) {
    let key = arr[i];
    let j;
    for(j=i-1; j >= 0 && key < arr[j]; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = key;
  }

  return arr;
}

console.log(insertionSort(arr));


// Time Complexity = 0(n^2);
// Space Complexity = O(1)