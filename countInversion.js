// Not resolved

const { divide } = require("lodash");

let arr = [20,10, 40, 30];
let i = 0;
let j = arr.length - 1;

const mergeProcedure = (arr, arr1) => {
  
}

const countinversion = (arr, i, j) => {
  if(i == j) return arr[i];

  let mid = Math.floor(arr.length / 2);
  let left = countinversion(arr.slice(0, mid), i, j);
  let right = countinversion(arr.slice(mid), i, j);
  if(arr[i] > arr[j]) {
    lct = 
  }
  return mergeProcedure(left, right)
}

const divide = (arr, lb, ub) => {
  if(lb < ub) {
    const mid = lb + Math.floor((ub - lb) / 2);

    const leftConversionCount = divide(arr, lb, mid);   
    const rightConversionCount = divide(arr, mid+1, ub);
       
  }
}


const countConversions = (arr) => {
  return divide(arr, 0, arr.length-1);
}

const nums = [2, 4, 1, 3, 5]