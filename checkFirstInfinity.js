// Find out the first "infinity" index with an unsorted arrar
let arr = [-8, 20, 27, 47, 29, 35, 'inf', 'inf', 'inf', 'inf' ];
// O/P - 6

// Brute first search
// const checkFirstInfinity = (arr) => {
//   for(let i=0; i<arr.length-1; i++) {
//     if(arr[i] === 'inf') {
//       return i;
//     }
//   }
// }
// console.log(checkFirstInfinity(arr));

const checkFirstInfinity = (sortedArr) => {
  
  let arr = sortedArr.sort((a, b) => a-b);
  let left = 0;
  let right = arr.length - 1;
  while(left<=right) {
    let mid = left + (right-left) / 2;
    if(arr[mid] === Number) {
      left = mid + 1;
    } if(arr[mid] <= "inf") {
      right = mid - 1;
    }
    mid = left + (right-left) / 2;
  }
return mid;
  
}
console.log(checkFirstInfinity(arr));




// Find out the first "infinity" index. Here we dont know the length of the array.
// let arr = [-8, 20, 27, 47, 29, 35, 'inf', 'inf', 'inf', 'inf', ........, 'inf' ];
// O/P - 6