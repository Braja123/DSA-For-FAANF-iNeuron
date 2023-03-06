// Given a positive integer num, write a program that returns True if num is a perfect
// square else return False. Do not use built-in functions like sqrt. Also, talk about the time
// complexity of your code.
// Test Cases:
// Input: 16
// Output: True
// Input: 14
// Output: False


const checkSqrt = (num) => {
  if(num === 2) {
    return true;
  } else if(num > 2) {
    return checkSqrt(num / 2);
  } else {
    return false;
  }
}

let num = 16;

const res = checkSqrt(num);
console.log(res);