// Divide Two Integers (Facebook)
// Given two integers, dividend and divisor, divide the two integers without using multiplication, division, and mod operator.

// Brute Force Approach
let dividend = 47;
let divisor = 4;

// const divideInteger = (divd, divr) => {
//   let count = 0;
//   console.log(divd, divr);
//   while((divd - divr) > divr) {
//     count += 1;
//     divd -= divr;

//     console.log("Count is", count);
//     console.log("divisor is", divd);
//   }
//   return count+1;
// }
// console.log(divideInteger(dividend, divisor));
// Time Complexity: O(N)
// Space Complexity: O(1)

// Best Approach by Bit Manupulation
const divideInteger = (dividend, divisor) => {

  // Here we use abs() for the negative value if there.
  let divd = Math.abs(dividend);
  let div = Math.abs(divisor);

  let result = 0;

  while(divd >= div) {
    let shift = 0;
    // left shift operator
    while(div >= (div << shift) ) {
      shift += 1;
    }
    result += (1 << (shift-1));
    divd -= div << (shift-1);
  }

  // Negative case handling
  if((dividend < 0 && divisor >= 0) || (divisor < 0 && dividend >= 0)) {
    result = -result;
  }

  // 2^31 - 1: 2147483647 to -2^31: -2147483648
  // In this condition which value is minimum take that
  return Math.min(2147483647, Math.max(-2147483648, result));
}
console.log(divideInteger(dividend, divisor));

// Time Complexity: O(log^^2N)
// Space Complexity: O(1)

// Please refer Lecture 25 "Time Complexity Divide two integers" PDF - For more details about Time Complexity