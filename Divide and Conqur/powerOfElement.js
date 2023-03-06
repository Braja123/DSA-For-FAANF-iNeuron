// Find the power of element - Divide and Conqure

let a = 2;
let n = 4;

const findPowerOfElement = (a, n) => {
  if(n === 1) {
    return a;
  } else if(n === 0) {
    return 1;
  } else {

    // divide
    let mid = n/2;

    // conquer
    let b =  findPowerOfElement(a, mid);

    // Combine
    let result = b*b;
    if(n % 2 === 0) {
      return result;
    } else {
      return result * a;
    }
  } 
}

console.log(findPowerOfElement(a, n));