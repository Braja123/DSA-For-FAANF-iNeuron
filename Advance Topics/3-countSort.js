// Count Sort

const countingSort = (arr) => {
  const countingArray = new Array(arr.length + 1);

  for(let i=0; i<countingArray.length; i++) {
    countingArray[i] = 0;
  }

  for(let num of arr) {
    countingArray[num] += 1;
  }

  for(let i=1; i< countingArray.length; i++) {
    countingArray[i] += countingArray[i-1]; 
  }

  const sortedArray = new Array(arr.length);

  for(let unSortedArrayPos = arr.length-1; unSortedArrayPos >= 0; unSortedArrayPos--) {
    const sortedArrayPos = countingArray[arr[unSortedArrayPos]];
    countingArray[arr[unSortedArrayPos]] -= 1;

    sortedArray[sortedArrayPos - 1] = arr[unSortedArrayPos];
  }

  return sortedArray;
}

console.log(countingSort([1, 4,1,2,7,5,2,9,8]));

// Time Complexity - O(N)
// Space Complexity - O(N)