
let arr = [-1, 2, 1, -4];
let target = 1;

const closestTarget = (arr1, target, num) => {
  let closetSum = 1000;
  let sortArr = arr.sort((a,b) => a-b);
  for(let i=0; i<sortArr.length; i++) {
    let left = i+1;
    let right = arr.length - 1;

    while(left <= right) {
      let sum = arr[i] + arr[left] + arr[right];
      if(Math.abs(target - sum) < Math.abs(target - closetSum)) {
        closetSum = sum;
      } else if(sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closetSum;
}

console.log(closestTarget(arr, target, 3));