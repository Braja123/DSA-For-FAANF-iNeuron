let arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];

const findIndexArr = (arr, num) => {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(findIndexArr(arr, 697));;