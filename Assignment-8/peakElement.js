// Find of peak element [Facebook]
// The peak element is the element that is strictly greater than its neighbors. If an array contains multiple peak elements, return the index of any of the peak elements.
// For example: [1,2,3,1]
// Output: 2

// Approach Modified Binary Search

// Driver Code
let arr = [1,2,1,3, 5, 6, 4];

// Method Definition
const peakElement = (arr) => {
  if(arr[0] > arr[1]) {
    return 0;
  }
  if(arr[-1] > arr[-2]) {
    return arr.length-1;
  }

  let start = 0;
  let end = arr.length-1;
  
  while(start < end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] < arr[mid+1]) {
      start = mid+1;
    } else {
      end = mid;
    }
  }
  return end;
}

console.log(peakElement(arr));
